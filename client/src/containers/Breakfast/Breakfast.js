import React, {Component} from 'react';
import './Breakfast.css';

import MealTitleContainer from '../../components/MealTitleContainer/MealTitleContainer';
import MealBox from '../../components/MealBox/MealBox';
import MealEntry from '../../components/MealEntry/MealEntry';

import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/index';

class Breakfast extends Component {

    state = {
        breakfastInput: "",
    }

    handleChange = (event) => {
        this.setState({breakfastInput: event.target.value});
    }

    addAndResetInput = () => {
        const currentValue = this.state.breakfastInput
        this.props.addToBreakfastList(currentValue);
        this.setState({breakfastInput: ""});
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.addAndResetInput();
        }
    }


    render() {
        
        const BreakfastMealEntry = this.props.dateBreakfastList.map((ele,idx) => {
            return(
                <MealEntry 
                    value={ele} 
                    deleteEntry={() => this.props.delFromBreakfastList(idx)}
                />
            );
        })

        return(
            <div className="Breakfast">
                <MealTitleContainer 
                    mealTitle={"Breakfast"}
                    enteredText={this.state.breakfastInput}
                    handleChange={this.handleChange}
                    handlePressEnter={this.handleEnter}
                    addToList={this.addAndResetInput}
                    saveToDB={() => this.props.saveToBreakfastDB(this.props.currentDate)}
                    />
                <MealBox>
                    {BreakfastMealEntry}
                </MealBox>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dateBreakfastList: state.breakfastRedu.breakfastList,
        currentDate: state.dateRedu.chosenDate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToBreakfastList: (food) => dispatch(actionCreator.addBreakfast(food)),
        delFromBreakfastList: (idx) => dispatch(actionCreator.delBreakfast(idx)),
        saveToBreakfastDB: (currDate) => dispatch(actionCreator.saveBreakfast(currDate)),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Breakfast);