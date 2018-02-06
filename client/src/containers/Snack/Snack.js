import React, {Component} from 'react';
import './Snack.css';

import MealTitleContainer from '../../components/MealTitleContainer/MealTitleContainer';
import MealBox from '../../components/MealBox/MealBox';
import MealEntry from '../../components/MealEntry/MealEntry';

import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/index';

class Snack extends Component {

    state = {
        snackInput: "",
    }

    handleChange = (event) => {
        this.setState({snackInput: event.target.value});
    }

    addAndResetInput = () => {
        const currentValue = this.state.snackInput
        this.props.addToSnackList(currentValue);
        this.setState({snackInput: ""});
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.addAndResetInput();
        }
    }

    render() {
        
        const SnackMealEntry = this.props.dateSnackList.map((ele,idx) => {
            return(
                // Using idx because there's no need to complicate the array
                <MealEntry
                    key={idx} 
                    value={ele} 
                    deleteEntry={() => this.props.delFromSnackList(idx)}
                />
            );
        })

        return(
            <div className="Snack">
                <MealTitleContainer 
                    mealTitle={"Snack"}
                    enteredText={this.state.snackInput}
                    handleChange={this.handleChange}
                    handlePressEnter={this.handleEnter}
                    addToList={this.addAndResetInput}
                    saveToDB={() => this.props.saveToSnackDB(this.props.currentDate)}
                    />
                <MealBox>
                    {SnackMealEntry}
                </MealBox>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dateSnackList: state.snackRedu.snackList,
        currentDate: state.dateRedu.chosenDate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToSnackList: (food) => dispatch(actionCreator.addSnack(food)),
        delFromSnackList: (idx) => dispatch(actionCreator.delSnack(idx)),
        saveToSnackDB: (currDate) => dispatch(actionCreator.saveSnack(currDate)),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Snack);