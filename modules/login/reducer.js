import initialState from './state';
import * as actionTypes from './actionTypes';

export default function loginReducer (state = initialState,action){

    switch(action.type){
        case actionTypes.LOGIN_GET: 
        return {
            loginData:{
            email:"ps6111993@gmail.com",
            name:"pragati after action reducer call"
        
        }
    }
        default: return state;

    }
}