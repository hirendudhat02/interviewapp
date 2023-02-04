import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {profile_icon, expert_icon} from '../constants/assets';
import colors from '../constants/colors';
import DeshbordScreen from '../containers/Deshbord';
import {moderateScale} from '../helpers/ResponsiveFonts';
import ProfileScreen from '../containers/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="CategoryScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: () => {
          return null;
        },
      }}>
      <Tab.Screen
        name="CategoryScreen"
        component={DeshbordScreen}
        options={{
          tabBarStyle: {borderTopWidth: 0},
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  borderTopWidth: focused ? 3 : 0,
                  borderTopColor: colors.purpal,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    tintColor: focused ? colors.purpal : colors.appGray,
                    resizeMode: 'contain',
                    height: moderateScale(25),
                    marginTop: moderateScale(10),
                  }}
                  source={expert_icon}
                />
                <Text
                  style={{
                    color: focused ? colors.purpal : colors.appGray,
                  }}>
                  Dashboard
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  borderTopWidth: focused ? 3 : 0,
                  borderTopColor: colors.purpal,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    tintColor: focused ? colors.purpal : colors.appGray,
                    resizeMode: 'contain',
                    height: moderateScale(25),
                    marginTop: moderateScale(10),
                  }}
                  source={profile_icon}
                />
                <Text
                  style={{
                    color: focused ? colors.purpal : colors.appGray,
                  }}>
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
