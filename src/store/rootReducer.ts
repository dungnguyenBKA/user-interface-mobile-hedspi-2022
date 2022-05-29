import { combineReducers } from 'redux'
import settingSlice from "./slice/settingSlice";
import authSlice from "./slice/authSlice";
import jobSlice from "./slice/jobSlice";

const rootReducer = combineReducers({
  setting: settingSlice.reducer,
  auth: authSlice.reducer,
  job: jobSlice.reducer
})

export default rootReducer
