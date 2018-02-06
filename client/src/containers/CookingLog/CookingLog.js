import React, { Component } from 'react';
import './CookingLog.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import Snack from '../Snack/Snack';

import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/index';

class CookingLog extends Component {
    render() {
        return(
            <div className={"CookingLog-Container"}>
                {/* <h1>Date: {this.props.currentDate}</h1>  */}
                <div className="Date">
                    <DatePicker
                        dateFormat="MMM DD YYYY"
                        className="Date-DatePicker"
                        selected={this.props.currentDate}
                        onChange={(date) => this.props.changeCurrentDate(date)}
                        placeholderText="Select a Date Here"
                        popperPlacement="right-start"
                        popperClassName="Date-Popper"
                    />
                </div>
                <div className="Meal-Container">
                    <Breakfast/>
                    <Lunch/>
                    <Dinner/>
                    <Snack/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentDate: state.dateRedu.chosenDate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCurrentDate: (date) => dispatch(actionCreator.changeDateState(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookingLog);