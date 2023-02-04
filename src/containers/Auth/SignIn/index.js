import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import ContentView from '../../../components/ContentView';
import TextInputWithLabel from '../../../components/TextInputWithLabel';
import ButtonComponent from '../../../components/Button';
import {message, eye_off, eye_on} from '../../../constants/assets';
import Regex from '../../../helpers/Regex';
import {moderateScale} from '../../../helpers/ResponsiveFonts';
import colors from '../../../constants/colors';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {LoginRequest} from '../../../redux/Action/LoginAction';
import {loaderAction} from '../../../redux/Action/LoaderAction';
import Loader from '../../../helpers/loader';
import ErrorComponent from '../../../components/Error';
const SignInScreen = props => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const laderResponse = useSelector(state => state.loader);

  const Loginfucation = () => {
    if (Regex.validateEmail(email) && Regex.validatePassword(password)) {
      const editErrorState = {...error};
      editErrorState.email = false;
      editErrorState.password = false;

      setError(editErrorState);
      let payload = {
        email: email,
        password: password,
      };

      dispatch(LoginRequest(payload, props.navigation));
      dispatch(loaderAction(true));
    } else {
      const editErrorState = {...error};
      if (!Regex.validateEmail(email)) {
        editErrorState.email = true;
      } else {
        editErrorState.email = false;
      }
      if (!Regex.validatePassword(password)) {
        editErrorState.password = true;
      } else {
        editErrorState.password = false;
      }
      setError(editErrorState);
    }
  };
  return (
    <View style={styles.container}>
      <ContentView headerText={'Dashboard'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: moderateScale(200),
              marginHorizontal: moderateScale(20),
            }}>
            <Text style={styles.headerText}>Login to Your Account</Text>
          </View>
          <View style={styles.contentView}>
            <TextInputWithLabel
              icon={message}
              iconPress={true}
              inputPlaceholder={'Please enter Email'}
              inputValue={email}
              label={'Email Address'}
              onTextInputChange={text => setEmail(text.trim())}
              inputMaxLength={50}
              keyboardType="email-address"
            />
            {error.email && (
              <ErrorComponent
                right={'right'}
                errorMessage={'Enter valid email'}
              />
            )}
            <TextInputWithLabel
              icon={showPassword ? eye_on : eye_off}
              inputPlaceholder={'Please enter password'}
              inputValue={password}
              label={'Password'}
              onButtonPress={() => setShowPassword(!showPassword)}
              onTextInputChange={text => setPassword(text)}
              showPassword={showPassword}
              inputMaxLength={10}
              type="password"
            />
            {error.password && (
              <ErrorComponent
                right={'right'}
                errorMessage={'Enter valid password'}
              />
            )}
            <TouchableOpacity
            // onPress={() => navigation.navigate('ForgetPasswordScreen')}
            >
              <Text style={styles.forgotPassword}> {'Forgot Password?'}</Text>
            </TouchableOpacity>
            <View style={styles.buttonView}>
              <ButtonComponent
                onButtonPress={() => Loginfucation()}
                buttonText={'Login'}
                buttonDisable={password !== '' && email !== '' ? false : true}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={[styles.signUp, {color: colors.inputLabelColor}]}>
                {'Don’t have an account?'}
              </Text>
              <TouchableOpacity
              // onPress={() => {}}
              >
                <Text style={[styles.signUp, {color: colors.purpal}]}>
                  {' Sign Up Now'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ContentView>
      <Loader value={laderResponse.loader} />
    </View>
  );
};

export default SignInScreen;
