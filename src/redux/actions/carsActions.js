import axios from 'axios';
import { GET_CARS_LOADING, GET_CARS_LIST } from './types';

// Get Cars List
export const getCarsList = () => dispatch => {
    dispatch(getCarsLoading());
    axios.get('http://106.51.72.111:9091/api/Make/GetMake')
    .then(res => 
        dispatch({
            type: GET_CARS_LIST,
            payload: res.data.ResponseObject
        })
    )
    .catch(err => console.log(err))
}

// Get Cars Loading
export const getCarsLoading = () => {
    return {
        type: GET_CARS_LOADING
    }
}