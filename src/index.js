import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


ReactDOM.render(
    <Provider store = {createStore(reducer,applyMiddleware(thunk))}>
    <App />
    </Provider>,
    document.querySelector("#root")
)