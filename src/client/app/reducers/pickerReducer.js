/**
 * Created by gparis on 12/5/17.
 */
import { SELECT_MONTH, SELECT_YEAR } from '../actions/types';
import moment from 'moment';
const INITIAL_STATE = {month: '', year: moment().get('year')};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECT_MONTH:
            return {...state, month: action.payload};
        case SELECT_YEAR:
            return {...state, year: action.payload};
    }
    return state;
}

