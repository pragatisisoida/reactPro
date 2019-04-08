import * as actionTypes from './actionTypes';

export function getLoginInfo(payload){
    return {
        type: actionTypes.LOGIN_GET,
        payload: payload
    }
}
export function fetchData(payload){

}

export function fetchDataInit(){
    return {
        type: actionTypes.FETCH_DATA_INIT,
        payload: payload
    }
}
export function fetchDataFailure(payload){
    return {
        type: actionTypes.FETCH_DATA_FAILURE,
        payload: payload
    }
}

export function fetchDataSuccess(payload){
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: payload
    }
}