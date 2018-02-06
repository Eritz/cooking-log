import React, {Component} from 'react';
import './Lunch.css';

import MealTitleContainer from '../../components/MealTitleContainer/MealTitleContainer';
import MealBox from '../../components/MealBox/MealBox';
import MealEntry from '../../components/MealEntry/MealEntry';

import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/index';

class Lunch extends Component {

    state = {
        lunchInput: "",
    }

    handleChange = (event) => {
        this.setState({lunchInput: event.target.value});
    }

    addAndResetInput = () => {
        const currentValue = this.state.lunchInput
        this.props.addToLunchList(currentValue);
        this.setState({lunchInput: ""});
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.addAndResetInput();
        }
    }

    render() {
        
        const LunchMealEntry = this.props.dateLunchList.map((ele,idx) => {
            return(
                // Using idx because there's no need to complicate the array
                <MealEntry
                    key={idx} 
                    value={ele} 
                    deleteEntry={() => this.props.delFromLunchList(idx)}
                />
            );
        })

        return(
            <div className="Lunch">
                <MealTitleContainer 
                    mealTitle={"Lunch"}
                    enteredText={this.state.lunchInput}
                    handleChange={this.handleChange}
                    handlePressEnter={this.handleEnter}
                    addToList={this.addAndResetInput}
                    saveToDB={() => this.props.saveToLunchDB(this.props.currentDate)}
                    />
                <MealBox>
                    {LunchMealEntry}
                </MealBox>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dateLunchList: state.lunchRedu.lunchList,
        currentDate: state.dateRedu.chosenDate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToLunchList: (food) => dispatch(actionCreator.addLunch(food)),
        delFromLunchList: (idx) => dispatch(actionCreator.delLunch(idx)),
        saveToLunchDB: (currDate) => dispatch(actionCreator.saveLunch(currDate)),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Lunch);