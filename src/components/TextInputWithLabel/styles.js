
import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import {verticalScale, moderateScale} from '../../helpers/ResponsiveFonts';

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(20),
  },
  inputLabel: {
    color: colors.inputLabelColor,
    fontFamily: fonts.Muli,
    fontSize: moderateScale(14),
    fontWeight: '400',
    letterSpacing: 0.03,
    lineHeight: 17,
  },
  inputContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: verticalScale(4.65),
    borderWidth: 2,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: colors.White,
    borderColor: colors.borderColor,
  },
  inputView: {
    width: '85%',
  },
  inputValuePosition: {
    paddingStart: moderateScale(16.23),
    paddingVertical:
      Platform.OS === 'android' ? moderateScale(10.5) : moderateScale(15.5),
  },
  input: {
    color: colors.inputLabelColor,
    fontFamily: fonts.Muli,
    fontSize: moderateScale(15),
    fontWeight: '700',
    letterSpacing: 0.02,
    lineHeight: 19,
  },
  inputIcon: {
    paddingVertical:
      Platform.OS === 'android' ? moderateScale(10.5) : moderateScale(15.5),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  icon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  leftIcon: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
});

export default styles;
