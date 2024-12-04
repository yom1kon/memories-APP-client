import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import App from './App';
import {thunk} from 'redux-thunk'
import rootReducers from './reducers'
import './index.css'

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));