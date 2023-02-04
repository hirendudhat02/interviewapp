import {takeEvery, all} from 'redux-saga/effects';
import {loginSaga} from './LoginSaga';
import {ProfileSaga} from './ProfileSaga';

export default function* root_saga() {
  yield all([
    takeEvery('LOGIN_REQUEST', loginSaga),
    takeEvery('PROFILE_REQUEST', ProfileSaga),
  ]);
}
