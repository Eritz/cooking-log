import React, { Component } from 'react';
import './Layout.css';
import CookingLog from '../CookingLog/CookingLog';

class Layout extends Component {
    render() {
        return(
            <div className={"Layout-Container"}>
                <h1>Cooking Log</h1>
                <CookingLog/>
            </div>
        );
    }
}

export default Layout;