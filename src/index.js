import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'store/configureStore';
import './index.css';

const store = configureStore;

const rootElement = document.getElementById('root');

const render = Component =>
    ReactDOM.render(
            <Provider store={store}>
                <Component/>
            </Provider>,
    rootElement
);

window.onload = function () {
    render(App);
}