import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/styles.css';
import AppRoute from './AppRoute';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRoute />, document.getElementById('root'));
registerServiceWorker();
