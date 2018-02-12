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

export function controlUsers(api, error) {
    console.log('api ', api);
    console.log('error ', error);
    return dispatch => { 
        dispatch(request({api}));
        
        if(api===true && error===false){
            dispatch(success({api}));
        }else{
            dispatch(failure('error'));
        }

    }

    function request(api) { return { type: USER_REQUEST, api } }
    function success(api) { return { type: USER_SUCESS, api } }
    function failure(error) { return { type: USER_FAILURE, error } }
}