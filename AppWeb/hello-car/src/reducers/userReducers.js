const initialState ={
	dataIn: false,
	dataApi: ''
}

const userReducers = (state = initialState, action) => {
	switch (action.type){
		case 'USER_JSON_REQUEST':
			return [
				...state,
				{
					dataApi: action.api,
				}
			]
			break;
		case 'USER_JSON_SUCESS':
			//return action.value
			return [
				...state,
				{
				dataIn: true
				}
			]
			break;
		case 'USER_JSON_FAILURE':
			return [
				...state,
				{
					dataIn: false,
					error: action.error,
				}
			]
			break;

		default:
			return state
	}
}

export default userReducers;