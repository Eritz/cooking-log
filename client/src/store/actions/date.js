import * as actionTypes from './actions';

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