const initialState ={
	username:'',
	submitted: false,
	loggedIn: false
}

const loginReducers = (state = initialState, action) => {
	switch (action.type){
		case 'USER_LOGIN_REQUEST':
			return [
				...state,
				{
					username: action.username,
				}
			]
			break;
		case 'USER_LOGIN_SUCESS':
			return {
				loggedIn: true
			}
			break;
		case 'USER_LOGIN_FAILURE':
			return [
				...state,
				{
					error: action.error,
				}
			]
			break;

		default:
			return state
	}
}

export default loginReducers;