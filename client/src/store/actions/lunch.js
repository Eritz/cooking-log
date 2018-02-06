import * as actionTypes from './actions';

import axios from 'axios';

export const addLunch = (food) => {
    return {
        type: actionTypes.ADD_LUNCH,
        value: food,
    }

}

export const delLunch = (idx) => {
    return {
        type: actionTypes.DEL_LUNCH,
        value: idx,
    }
}

export const getLunch = (dbInfo) => {
    return {
        type: actionTypes.GET_LUNCH,
        value: dbInfo,
    }
}

export const getLunchDB = (date) => {
    const dateVar = date.format();
    return (dispatch) => {
        axios.get("http://localhost:7000/dates/"+dateVar+"/lunch")
        .then(response => {
            dispatch(getLunch(response.data.lunchChosen.meal))
        })
        .catch(error => {
            dispatch(getLunchEmpty())
        })
    }
}

export const getLunchEmpty = () => {
    return {
        type: actionTypes.GET_LUNCH_EMPTY,
        value: [],
    }
}

export const saveLunch = (date) => {
    return {
        type: actionTypes.SAVE_LUNCH,
        value: date,
    }
}