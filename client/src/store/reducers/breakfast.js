import * as actionTypes from '../actions/actions';

const initialState = {
    breakfastList: ["tofu", "pancake"],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        
        case actionTypes.ADD_BREAKFAST:
            let newBreakfastList = [...state.breakfastList];
            // If it isn't empty space then add to the list
            if (!action.value.match(/^\s*$/)) {
                newBreakfastList = newBreakfastList.concat(action.value);
            }
            return {
                ...state,
                breakfastList: newBreakfastList,
            }
        
        case actionTypes.DEL_BREAKFAST:
            const remBreakfastList = [...state.breakfastList];
            remBreakfastList.splice(action.value, 1);
            console.log(remBreakfastList);
            return {
                ...state,
                breakfastList: remBreakfastList,
            }
        
        case actionTypes.SAVE_BREAKFAST:
            // Need to access the date
            // Make axios connection here to send to mlab
            if (!action.value === null) {
                console.log(action.value);
            }
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default reducer;