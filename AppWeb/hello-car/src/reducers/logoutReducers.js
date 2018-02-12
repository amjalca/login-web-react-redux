const initialState ={
	submittedOut: false
}

const logoutReducers = (state = initialState, action) => {
	switch (action.type){
		case 'USER_LOGOUT_REQUEST':
			return [
				...state,
				{
					submittedOut: action.control
				}
			]
			break;
		case 'USER_LOGOUT_SUCESS':
			return {
				submittedOut: action.control
			}
			break;
		case 'USER_LOGOUT_FAILURE':
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

export default logoutReducers;