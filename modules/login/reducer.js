import initialState from './state';
import * as actionTypes from './actionTypes';

export default function loginReducer (state = initialState,action){

    switch(action.type){
        case actionTypes.LOGIN_GET: 
        return {
            ...state,
            loginData:{
            email:"ps6111993@gmail.com",
            name:"pragati after action reducer call"
        
        }
    }
        case actionTypes.FETCH_DATA_INIT:
        return {
            ...state,
            countries: {
                ...state.countries,
                loading: true,
                success: false
            }

        }
        case actionTypes.FETCH_DATA_SUCCESS:
        return {
            ...state,
            countries:{
                ...state.countries,
                loading:false,
                data :action.payload && action.payload.data,
                success: true
            }
        }
        case actionTypes.FETCH_DATA_FAILURE:
        return {
            ...state,
            countries:{
                ...state.countries,
                loading:false,
                message :"error fetching data",
                data: undefined,
                error: action.payload

            }
        }
    
        default: return state;

    }
}