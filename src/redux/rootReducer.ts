import { combineReducers } from "redux";
import appReducer from "./appReducer";
import dataReducer from "./dataReducer"

const rootReducer = combineReducers({ appReducer, dataReducer })

export default rootReducer;