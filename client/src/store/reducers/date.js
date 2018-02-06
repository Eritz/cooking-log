import * as actionTypes from '../actions/actions';

const initialState = {
    chosenDate: null, // Moment object
}

const reducer = (state=initialState, action) => {
    if (action.type === actionTypes.CHANGE_DATE) {
        let newCurrentDate = action.value;
        return {
            ...state,
            chosenDate: newCurrentDate,
        }
    } else {
        return {
            ...state,
        }
    }        

}

export default reducer;