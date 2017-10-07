import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as config from './config';


ReactDOM.render(<App {...config}/>, document.getElementById('root'));
registerServiceWorker();
