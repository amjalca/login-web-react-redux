import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/styles.css';
import AppRoute from './AppRoute';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { store } from './helpers';
// const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<AppRoute />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
