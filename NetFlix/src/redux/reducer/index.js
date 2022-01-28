import { combineReducers } from "redux";
import authenReducer from "./authenReducer";
import moviesReducer from "./moviesReducer";

const allReducers = combineReducers({
    /** 01 */    authenReducer,
    /** 02 */    moviesReducer,
    
    });
    export default allReducers;