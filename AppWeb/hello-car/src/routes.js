import Login from './components/LoginPage/Login';
import Logout from './components/LogoutPage/Logout';
import Base from './components/HomePage/Base';
import Pageko from './components/KoPage/Pageko';

const routes = [
	{
		path: '/login',
		component: Login,
		exact: true
	},
	{
		path: '/',
		component: Base,
		exact: true
	},
	{
		path: '/logout',
		component: Logout,
		exact: true
	},
	{
		component: Pageko
	}
];

export default routes;