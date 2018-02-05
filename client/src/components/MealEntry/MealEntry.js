import React from 'react';
import './MealEntry.css';

const mealentry = (props) => {
    return(
        <div className="MealEntry" onClick={props.deleteEntry}>
            <p>{props.value}</p>
        </div>
    );
}

export default mealentry;