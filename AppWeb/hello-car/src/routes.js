import Login from './components/Login';
import Logout from './components/Logout';
import Base from './components/Base';

const routes = [
	{
		path: '/',
		component: Base,
		exact: true
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/logout',
		component: Logout
	}
];

export default routes;