import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import dateReducer from './store/reducers/date';
import breakfastReducer from './store/reducers/breakfast';
import lunchReducer from './store/reducers/lunch';
import dinnerReducer from './store/reducers/dinner';
import snackReducer from './store/reducers/snack';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mainReducer = combineReducers({
    dateRedu: dateReducer,
    breakfastRedu: breakfastReducer,
    lunchRedu: lunchReducer,
    dinnerRedu: dinnerReducer,
    snackRedu: snackReducer,
})

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
