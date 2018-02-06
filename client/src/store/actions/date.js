import * as actionTypes from './actions';


// Use these in the dispatch
import {getBreakfastDB} from './breakfast.js';
import {getLunchDB} from './lunch.js';
import { getDinnerDB } from './dinner';
import { getSnackDB } from './snack';

// Change Date on the Screen
export const changeDate = (date) => {
    return {
        type: actionTypes.CHANGE_DATE,
        value: date,
    }
}

// Change Date and access the server
export const changeDateState = (date) => {
    return (dispatch) => {
        dispatch(changeDate(date))
        dispatch(getBreakfastDB(date))
        dispatch(getLunchDB(date))
        dispatch(getDinnerDB(date))
        dispatch(getSnackDB(date))
    }
}