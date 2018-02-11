import axios from 'axios';

/*
* Acciones de login
*/
export const USER_SUCESS= 'USER_JSON_SUCESS'
export const USER_FAILURE= 'USER_JSON_FAILURE'
export const USER_REQUEST= 'USER_JSON_REQUEST'

/*
* Accion creators
*/

export function showUsers() {
	console.log('showUsers');
    return (dispatch) => {
    	dispatch( { type: USER_REQUEST, value: 'ok'} )
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
            	console.log(response);
            	dispatch( { type: USER_SUCESS, value: response.data} )
            })
            .catch(function (error) {
                dispatch( { type: USER_FAILURE, value: 'error'} )
            });
    }

}