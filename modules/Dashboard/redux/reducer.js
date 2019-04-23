import * as actionTypes from './actionTypes';
import initialState from './state';


export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.DASHBOARD_GET:
            return {requests: state.requests + 1};

        default: return state;
    }
};


