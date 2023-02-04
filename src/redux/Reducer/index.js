import {LoaderReducer} from './LoaderReducer';
import {LoginReducer} from '../Reducer/LoginReducer';
import {ProfileReducer} from './ProfileReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  loader: LoaderReducer,
  login: LoginReducer,
  profile: ProfileReducer,
});
