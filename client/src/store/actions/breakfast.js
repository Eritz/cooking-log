import * as actionTypes from './actions';

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

export const saveBreakfast = (date) => {
    return {
        type: actionTypes.SAVE_BREAKFAST,
        value: date,
    }
}