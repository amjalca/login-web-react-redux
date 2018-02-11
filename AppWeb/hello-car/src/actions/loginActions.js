/*
* Acciones de login
*/
export const LOGIN_REQUEST= 'USER_LOGIN_REQUEST'
export const LOGIN_SUCESS= 'USER_LOGIN_SUCESS'
export const LOGIN_FAILURE= 'USER_LOGIN_FAILURE'


// export const loginActions = {
// 	login
// }
/*
* Accion creators
*/
export function login(username, password){
	return dispatch => { 
		dispatch(request({username}));
		
		if(checkData(username,password)===true){
			dispatch(success({username}));
		}else{
			dispatch(failure('error'));
		}

	}

	function request(user) { return { type: LOGIN_REQUEST, user } }
	function success(user) { return { type: LOGIN_SUCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

export function checkData(username, password) {    
    if (username === 'frodo' && password === 'miprecioso') {
        return true;
    } else {
        return false;
    }
}