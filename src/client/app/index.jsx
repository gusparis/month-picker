/**
 * Created by gparis on 11/10/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import MonthPicker from './MonthPicker.jsx';

injectTapEventPlugin();
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#005fab',
        primary2Color: '#008fcb',
        accent1Color: '#005fab'
    },
    appBar: {
        height: 74,
    }
});
const createStoreWithMiddleware = compose(
    applyMiddleware(reduxThunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <MonthPicker/>
        </Provider>
    </MuiThemeProvider>, document.getElementById('app'));