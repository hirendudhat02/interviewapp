import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../containers/Auth/SignIn';
import BottomTabNavigator from './tabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AuthNavigator = props => {
  const [initialRouteName, setInitialRouteName] = React.useState('');
  AsyncStorage.getItem('token').then(data => {
    if (data === 'Login Successfully') {
      setInitialRouteName('BottomTabNavigator');
    } else {
      setInitialRouteName('SignInScreen');
    }
  });

  console.log('initialRouteName>>', initialRouteName);
  return (
    initialRouteName && (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    )
  );
};

export default AuthNavigator;
