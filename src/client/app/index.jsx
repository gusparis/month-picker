/**
 * Created by gparis on 11/10/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { pickerReducer } from './MonthPicker.jsx';
import MonthPicker from './MonthPicker.jsx';

const createStoreWithMiddleware = compose(
    applyMiddleware(reduxThunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f)(createStore);
const store = createStoreWithMiddleware(combineReducers({picker: pickerReducer}));

ReactDOM.render(
        <Provider store={store}>
            <MonthPicker onChange={(date)=>{console.log(date)}}/>
        </Provider>, document.getElementById('app'));