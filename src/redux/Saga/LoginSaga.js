import {Alert} from 'react-native';
import {put} from 'redux-saga/effects';
import Constant from '../../helpers/Constant';
import {loaderAction} from '../Action/LoaderAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function* loginSaga(action) {
  const {bodydata, navigation} = action;

  try {
    const response = yield fetch(Constant.baseURL + Constant.end_Point.LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodydata),
    });
    var responseJson = yield response.json();

    if (responseJson.message === 'Login Successfully') {
      Alert.alert(responseJson.message);
      AsyncStorage.setItem('token', responseJson.message);
      navigation.replace('BottomTabNavigator');
      yield put(loaderAction(false));
    } else {
      yield put(loaderAction(false));
      Alert.alert(responseJson.message);
    }
  } catch (err) {
    console.log(err);
    Alert.alert('Something went wrong');
    yield put(loaderAction(false));
  }
}
