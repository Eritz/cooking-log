import * as actionTypes from './actions';


// Use these in the dispatch
import {getBreakfastDB} from './breakfast.js';

export const getChosenDate = () => {
    return {
        type: actionTypes.GET_DATE,
    }
}

export const changeDate = (date) => {
    return {
        type: actionTypes.CHANGE_DATE,
        value: date,
    }
}

// Will not work yet

export const changeDateState = (date) => {
    return (dispatch) => {
        dispatch(changeDate(date)) // can't chain dispatch then b/c not a call
        dispatch(getBreakfastDB(date))
    }
}