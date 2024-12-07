import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import App from './App';
import {thunk} from 'redux-thunk'
import rootReducers from './reducers'
import './index.css'
import { ThemeProvider, StyledEngineProvider} from '@mui/material/styles';
import theme from './theme';

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
    <Provider store={store}>
        <App/>
    </Provider>
    </ThemeProvider>

        </StyledEngineProvider>
       

    </React.StrictMode>
    
, document.getElementById('root'));