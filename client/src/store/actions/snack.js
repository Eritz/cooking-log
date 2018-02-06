import * as actionTypes from './actions';

import axios from 'axios';

export const addSnack = (food) => {
    return {
        type: actionTypes.ADD_SNACK,
        value: food,
    }

}

export const delSnack = (idx) => {
    return {
        type: actionTypes.DEL_SNACK,
        value: idx,
    }
}

export const getSnack = (dbInfo) => {
    return {
        type: actionTypes.GET_SNACK,
        value: dbInfo,
    }
}

export const getSnackDB = (date) => {
    const dateVar = date.format();
    return (dispatch) => {
        axios.get("http://localhost:7000/dates/"+dateVar+"/snack")
        .then(response => {
            dispatch(getSnack(response.data.snackChosen.meal))
        })
        .catch(error => {
            dispatch(getSnackEmpty())
        })
    }
}

export const getSnackEmpty = () => {
    return {
        type: actionTypes.GET_SNACK_EMPTY,
        value: [],
    }
}

export const saveSnack = (date) => {
    return {
        type: actionTypes.SAVE_SNACK,
        value: date,
    }
}