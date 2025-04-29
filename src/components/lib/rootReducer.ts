import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
// import other reducers here as needed

const rootReducer = combineReducers({
  auth: authReducer,
  // other: otherReducer,
});

export default rootReducer;