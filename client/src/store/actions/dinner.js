import * as actionTypes from './actions';

import axios from 'axios';

export const addDinner = (food) => {
    return {
        type: actionTypes.ADD_DINNER,
        value: food,
    }

}

export const delDinner = (idx) => {
    return {
        type: actionTypes.DEL_DINNER,
        value: idx,
    }
}

export const getDinner = (dbInfo) => {
    return {
        type: actionTypes.GET_DINNER,
        value: dbInfo,
    }
}

export const getDinnerDB = (date) => {
    const dateVar = date.format();
    return (dispatch) => {
        axios.get("https://cooking-log.herokuapp.com/dates/"+dateVar+"/dinner")
        .then(response => {
            dispatch(getDinner(response.data.dinnerChosen.meal))
        })
        .catch(error => {
            dispatch(getDinnerEmpty())
        })
    }
}

export const getDinnerEmpty = () => {
    return {
        type: actionTypes.GET_DINNER_EMPTY,
        value: [],
    }
}

export const saveDinner = (date) => {
    return {
        type: actionTypes.SAVE_DINNER,
        value: date,
    }
}