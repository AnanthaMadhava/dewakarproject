import { GET_CARS_LOADING, GET_CARS_LIST } from '../actions/types';

const initialState = {
    loading: false,
    getCarsList: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_CARS_LIST:
            return {
                ...state,
                getCarsList: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}