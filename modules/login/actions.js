import * as actionTypes from './actionTypes';
import store from '../../store/index';
import * as apiFunctions from '../../apiLayer/apiService';

export function getLoginInfo(payload) {
    return {
        type: actionTypes.LOGIN_GET,
    }
}
export function fetchData(payload) {
   
    return {
        type: actionTypes.FETCH_DATA,
        payload: payload,

        config: {
            initHandler: this.fetchDataInit,
            successHandler: this.fetchDataSuccess,
            failureHandler: this.fetchDataFailure,
            url: "https://restcountries.eu/rest/v2/all",
            headers: {

            },
            method: "GET",
            // queryParams: {
            //     name: "abc",
            //     age: 2
            // }
        }
    }
}


export function fetchDataInit() {
    return {
        type: actionTypes.FETCH_DATA_INIT,

    }
}
export function fetchDataFailure(payload) {
    return {
        type: actionTypes.FETCH_DATA_FAILURE,
        payload: payload
    }
}

export function fetchDataSuccess(payload) {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: payload
    }
}