/**
 * Created by gparis on 11/10/17.
 */
import { combineReducers } from 'redux';
import pickerReducer from './pickerReducer';

const rootReducer = combineReducers({
    picker: pickerReducer
});

export default rootReducer;