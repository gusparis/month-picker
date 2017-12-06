/**
 * Created by gparis on 12/5/17.
 */
import { SELECT_MONTH, SELECT_YEAR } from './types';

export const selectMonth = month => {
    return dispatch => {
        dispatch({type: SELECT_MONTH, payload: month});
    }
};

export const selectYear = year => {
    return dispatch => {
        dispatch({type: SELECT_YEAR, payload: year});
    }
};