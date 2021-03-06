import * as actionTypes from './actions';

import axios from 'axios';

export const addBreakfast = (food) => {
    return {
        type: actionTypes.ADD_BREAKFAST,
        value: food,
    }

}

export const delBreakfast = (idx) => {
    return {
        type: actionTypes.DEL_BREAKFAST,
        value: idx,
    }
}

export const getBreakfast = (dbInfo) => {
    return {
        type: actionTypes.GET_BREAKFAST,
        value: dbInfo,
    }
}

export const getBreakfastDB = (date) => {
    const dateVar = date.format();
    return (dispatch) => {
        axios.get("https://cooking-log.herokuapp.com/dates/"+dateVar+"/breakfast")
        .then(response => {
            dispatch(getBreakfast(response.data.breakfastChosen.meal))
        })
        .catch(error => {
            dispatch(getBreakfastEmpty())
        })
    }
}

export const getBreakfastEmpty = () => {
    return {
        type: actionTypes.GET_BREAKFAST_EMPTY,
        value: [],
    }
}

export const saveBreakfast = (date) => {
    return {
        type: actionTypes.SAVE_BREAKFAST,
        value: date,
    }
}