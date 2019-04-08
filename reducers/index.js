import loginReducer from "../modules/login/reducer";
import { combineReducers } from 'redux';


const appReducer  = combineReducers({ loginReducer: loginReducer}
)

const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer;