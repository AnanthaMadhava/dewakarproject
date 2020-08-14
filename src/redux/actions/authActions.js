import axios from 'axios';
import isEmpty from '../../components/utils/is-empty';
import { AsyncStorage } from 'react-native';
import { SET_AUTH_LOADING, SET_AUTH_FALSE_LOADING, SET_CURRENT_USER } from './types';

// User Login
export const userLogin = data => dispatch => {
    dispatch(userLoading());
    axios.post('http://106.51.72.111:9091/api/Login/Login', data)
    .then(res => {
        const { ResponseObject, ErrorDetails } = res.data;

        if(!isEmpty(ResponseObject)) {
            const tokenStore = {
                uId:ResponseObject.ID, 
                token: ResponseObject.Token
            }
    
            AsyncStorage.setItem('project', JSON.stringify(tokenStore))
            
            dispatch({
                type: SET_CURRENT_USER,
                payload: ResponseObject
            })   
        } 

        if(!isEmpty(ErrorDetails)) {
            dispatch(stopUserLoading());
        }
    })
    .catch(err => {
        dispatch(stopUserLoading());
        console.log(err)
    })
}

export const currentUser = date => dispatch => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: {
            tokenExist: true
        }
    })
} 

// User Loading
export const userLoading = () => {
    return {
        type: SET_AUTH_LOADING
    }
}

// Stop User Loading
export const stopUserLoading = () => {
    return {
        type: SET_AUTH_FALSE_LOADING
    }
}