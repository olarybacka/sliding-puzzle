import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import * as config from './config';


const state = store.getState();

ReactDOM.render(<App {...state} {...config}/>, document.getElementById('root'));
registerServiceWorker();
