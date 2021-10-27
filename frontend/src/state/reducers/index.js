import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './userReducer';
const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default reducers;
