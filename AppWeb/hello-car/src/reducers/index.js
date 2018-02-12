import { combineReducers } from 'redux';
import logoutReducers from './logoutReducers';
import loginReducers from './loginReducers';

export default combineReducers({
	logoutReducers,
	loginReducers
});