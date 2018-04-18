import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import ngoReducer from "./ngoReducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    ngo: ngoReducer
})