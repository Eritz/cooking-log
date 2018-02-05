import React from 'react';
import './MealBox.css';

const mealbox = (props) => {
    return(
        <div className="Mealbox">
            {props.children}
        </div>
    );
}

export default mealbox;