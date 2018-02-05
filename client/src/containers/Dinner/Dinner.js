import React, {Component} from 'react';
import './Dinner.css';

import MealTitleContainer from '../../components/MealTitleContainer/MealTitleContainer';

class Dinner extends Component {
    render() {
        return(
            <div className="Dinner">
                <MealTitleContainer mealTitle={"Dinner"}/>
                <p>Hi Dinner</p>
            </div>
        );
    }
}

export default Dinner;