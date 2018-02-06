import React, {Component} from 'react';
import './Dinner.css';

import MealTitleContainer from '../../components/MealTitleContainer/MealTitleContainer';
import MealBox from '../../components/MealBox/MealBox';
import MealEntry from '../../components/MealEntry/MealEntry';

import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/index';

class Dinner extends Component {

    state = {
        dinnerInput: "",
    }

    handleChange = (event) => {
        this.setState({dinnerInput: event.target.value});
    }

    addAndResetInput = () => {
        const currentValue = this.state.dinnerInput
        this.props.addToDinnerList(currentValue);
        this.setState({dinnerInput: ""});
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.addAndResetInput();
        }
    }

    render() {
        
        const DinnerMealEntry = this.props.dateDinnerList.map((ele,idx) => {
            return(
                // Using idx because there's no need to complicate the array
                <MealEntry
                    key={idx} 
                    value={ele} 
                    deleteEntry={() => this.props.delFromDinnerList(idx)}
                />
            );
        })

        return(
            <div className="Dinner">
                <MealTitleContainer 
                    mealTitle={"Dinner"}
                    enteredText={this.state.dinnerInput}
                    handleChange={this.handleChange}
                    handlePressEnter={this.handleEnter}
                    addToList={this.addAndResetInput}
                    saveToDB={() => this.props.saveToDinnerDB(this.props.currentDate)}
                    />
                <MealBox>
                    {DinnerMealEntry}
                </MealBox>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dateDinnerList: state.dinnerRedu.dinnerList,
        currentDate: state.dateRedu.chosenDate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToDinnerList: (food) => dispatch(actionCreator.addDinner(food)),
        delFromDinnerList: (idx) => dispatch(actionCreator.delDinner(idx)),
        saveToDinnerDB: (currDate) => dispatch(actionCreator.saveDinner(currDate)),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dinner);