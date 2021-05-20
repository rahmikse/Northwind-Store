import *as actionTypes from './actionsTypes'

export function loginSuccess(login){
    return {
        type:actionTypes.GET_LOGIN_SUCCESS, payload: login
    }

}