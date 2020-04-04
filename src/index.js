import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './scss/main.scss';
import Main from './js/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>, 
    document.getElementById('main')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
