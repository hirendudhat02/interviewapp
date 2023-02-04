// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {put} from 'redux-saga/effects';
import Constant from '../../helpers/Constant';
import {loaderAction} from '../Action/LoaderAction';
import {ProfileResponse} from '../Action/ProfileAction';

export function* ProfileSaga(action) {
  const {payloade} = action;

  try {
    const response = yield fetch(
      Constant.baseURL + Constant.end_Point.PROFILE,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payloade),
      },
    );
    var responseJson = yield response.json();

    if (responseJson.message === 'Successfully executed.') {
      yield put(loaderAction(false));
      yield put(ProfileResponse(responseJson));
    } else {
      yield put(loaderAction(false));
      Alert.alert(responseJson.message);
    }
  } catch (err) {
    console.log('err', err);
    Alert.alert('Something went wrong');
    yield put(loaderAction(false));
  }
}
