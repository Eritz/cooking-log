import * as actionTypes from '../actions/actions';
import axios from 'axios';

const initialState = {
    breakfastList: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        
        // Add to the Breakfast list
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
        
        // When entry is clicked, delete it from the Breakfast list
        case actionTypes.DEL_BREAKFAST:
            const remBreakfastList = [...state.breakfastList];
            remBreakfastList.splice(action.value, 1);
            return {
                ...state,
                breakfastList: remBreakfastList,
            }
        
        // Set breakfastList from database
        case actionTypes.GET_BREAKFAST:
            const dbBreakfastList = action.value;
            return {
                ...state,
                breakfastList: dbBreakfastList,
            }

        // Set breakfastList as empty because there is nothing in the database
        case actionTypes.GET_BREAKFAST_EMPTY:
            const emptyArray = action.value;
            return {
                ...state,
                breakfastList: emptyArray,
            }
        
        // When save button is clicked, save to the database
        // action.value is the currentDate set
        case actionTypes.SAVE_BREAKFAST:
            // Handle if there is a date set
            if (action.value !== null) {             
                const dateToSave = action.value.format();
                axios.post("https://cooking-log.herokuapp.com/dates/"+dateToSave+"/breakfast", {meal: state.breakfastList})
                    .then(response => console.log(response.status)) 
                    .catch(error => console.log(error))
            }
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default reducer;