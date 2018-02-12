import axios from 'axios';

/*
* Acciones de login
*/
export const LOGOUT_REQUEST= 'USER_LOGOUT_REQUEST'
export const LOGOUT_SUCESS= 'USER_LOGOUT_SUCESS'
export const LOGOUT_FAILURE= 'USER_LOGOUT_FAILURE'

/*
* Accion creators
*/

export function logout(control){
    return dispatch => { 
        dispatch(request({control}));
        
        if(control===true){
            dispatch(success({control}));
        }else{
            dispatch(failure('error'));
        }

    }

    function request(control) { return { type: LOGOUT_REQUEST, control } }
    function success(control) { return { type: LOGOUT_SUCESS, control } }
    function failure(error) { return { type: LOGOUT_FAILURE, error } }
}