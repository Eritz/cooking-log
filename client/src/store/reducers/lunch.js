import * as actionTypes from '../actions/actions';
import axios from 'axios';

const initialState = {
    lunchList: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        
        // Add to the Lunch list
        case actionTypes.ADD_LUNCH:
            let newLunchList = [...state.lunchList];
            // If it isn't empty space then add to the list
            if (!action.value.match(/^\s*$/)) {
                newLunchList = newLunchList.concat(action.value);
            }
            return {
                ...state,
                lunchList: newLunchList,
            }
        
        // When entry is clicked, delete it from the Lunch list
        case actionTypes.DEL_LUNCH:
            const remLunchList = [...state.lunchList];
            remLunchList.splice(action.value, 1);
            console.log(remLunchList);
            return {
                ...state,
                lunchList: remLunchList,
            }
        
        // Set lunchList from database
        case actionTypes.GET_LUNCH:
            const dbLunchList = action.value;
            return {
                ...state,
                lunchList: dbLunchList,
            }

        // Set lunchList as empty because there is nothing in the database
        case actionTypes.GET_LUNCH_EMPTY:
            const emptyArray = action.value;
            return {
                ...state,
                lunchList: emptyArray,
            }
        
        // When save button is clicked, save to the database
        // action.value is the currentDate set
        case actionTypes.SAVE_LUNCH:
            // Handle if there is a date set
            if (action.value !== null) {             
                const dateToSave = action.value.format();
                axios.post("http://localhost:7000/dates/"+dateToSave+"/lunch", {meal: state.lunchList})
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