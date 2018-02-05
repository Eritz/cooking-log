import * as actionTypes from '../actions/actions';

const initialState = {
    chosenDate: null, // Moment object
}

const reducer = (state=initialState, action) => {
    switch (action.type) {

        // Get the current chosenTime
        case actionTypes.GET_DATE:
            return {
                ...state,
            }
        
        case actionTypes.CHANGE_DATE:
            let newCurrentDate = action.value;
            return {
                ...state,
                chosenDate: newCurrentDate,
            }
        default:
            return state;

    }
}

export default reducer;