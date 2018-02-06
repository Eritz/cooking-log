import * as actionTypes from '../actions/actions';
import axios from 'axios';

const initialState = {
    snackList: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        
        // Add to the Snack list
        case actionTypes.ADD_SNACK:
            let newSnackList = [...state.snackList];
            // If it isn't empty space then add to the list
            if (!action.value.match(/^\s*$/)) {
                newSnackList = newSnackList.concat(action.value);
            }
            return {
                ...state,
                snackList: newSnackList,
            }
        
        // When entry is clicked, delete it from the Snack list
        case actionTypes.DEL_SNACK:
            const remSnackList = [...state.snackList];
            remSnackList.splice(action.value, 1);
            return {
                ...state,
                snackList: remSnackList,
            }
        
        // Set snackList from database
        case actionTypes.GET_SNACK:
            const dbSnackList = action.value;
            return {
                ...state,
                snackList: dbSnackList,
            }

        // Set snackList as empty because there is nothing in the database
        case actionTypes.GET_SNACK_EMPTY:
            const emptyArray = action.value;
            return {
                ...state,
                snackList: emptyArray,
            }
        
        // When save button is clicked, save to the database
        // action.value is the currentDate set
        case actionTypes.SAVE_SNACK:
            // Handle if there is a date set
            if (action.value !== null) {             
                const dateToSave = action.value.format();
                axios.post("http://localhost:7000/dates/"+dateToSave+"/snack", {meal: state.snackList})
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