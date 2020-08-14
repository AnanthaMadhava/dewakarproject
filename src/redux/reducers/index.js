import { combineReducers } from 'redux';

import authReducer from './authReducer';
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    products: carsReducer
})

export default rootReducer;