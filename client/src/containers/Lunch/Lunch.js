import React, {Component} from 'react';
import './Lunch.css';

import MealTitleContainer from '../../components/MealTitleContainer/MealTitleContainer';

class Lunch extends Component {
    render() {
        return(
            <div className="Lunch">
                <MealTitleContainer mealTitle={"Lunch"}/>
                <p>Hi Lunch</p>
            </div>
        );
    }
}

export default Lunch;