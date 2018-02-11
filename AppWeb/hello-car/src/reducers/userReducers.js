const initialState ={
	dataIn: false, 
	users: []
}

const userReducers = (state = initialState, action) => {
	switch (action.type){
		case 'USER_JSON_REQUEST':
			return [
				...state,
				{
					ok: action.ok,
				}
			]
		case 'USER_JSON_SUCESS':
			return {
				dataIn: true,
				users: action.value
			}
			break;
		case 'USER_JSON_FAILURE':
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

export default userReducers;