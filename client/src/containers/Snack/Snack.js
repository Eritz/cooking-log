import React, {Component} from 'react';
import './Snack.css';

import MealTitleContainer from '../../components/MealTitleContainer/MealTitleContainer';

class Snack extends Component {
    render() {
        return(
            <div className="Snack">
                <MealTitleContainer mealTitle={"Snack"}/>
                <p>Hi Snack</p>
            </div>
        );
    }
}

export default Snack;