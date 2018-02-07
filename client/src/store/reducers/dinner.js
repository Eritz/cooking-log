import * as actionTypes from '../actions/actions';
import axios from 'axios';

const initialState = {
    dinnerList: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        
        // Add to the Dinner list
        case actionTypes.ADD_DINNER:
            let newDinnerList = [...state.dinnerList];
            // If it isn't empty space then add to the list
            if (!action.value.match(/^\s*$/)) {
                newDinnerList = newDinnerList.concat(action.value);
            }
            return {
                ...state,
                dinnerList: newDinnerList,
            }
        
        // When entry is clicked, delete it from the Dinner list
        case actionTypes.DEL_DINNER:
            const remDinnerList = [...state.dinnerList];
            remDinnerList.splice(action.value, 1);
            return {
                ...state,
                dinnerList: remDinnerList,
            }
        
        // Set dinnerList from database
        case actionTypes.GET_DINNER:
            const dbDinnerList = action.value;
            return {
                ...state,
                dinnerList: dbDinnerList,
            }

        // Set dinnerList as empty because there is nothing in the database
        case actionTypes.GET_DINNER_EMPTY:
            const emptyArray = action.value;
            return {
                ...state,
                dinnerList: emptyArray,
            }
        
        // When save button is clicked, save to the database
        // action.value is the currentDate set
        case actionTypes.SAVE_DINNER:
            // Handle if there is a date set
            if (action.value !== null) {             
                const dateToSave = action.value.format();
                axios.post("https://cooking-log.herokuapp.com/dates/"+dateToSave+"/dinner", {meal: state.dinnerList})
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