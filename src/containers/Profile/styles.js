import {Dimensions, Platform, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import {moderateScale, verticalScale} from '../../helpers/ResponsiveFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileimage: {
    alignSelf: 'center',
    bottom: moderateScale(-50),
    position: 'absolute',
    borderWidth: 3,
    borderRadius: moderateScale(70),
    borderColor: colors.White,
    backgroundColor: colors.White,
    elevation: 5,
    shadowColor: colors.Black,
  },
  errorMessage: {
    color: colors.inputLabelColor,
    fontSize: moderateScale(16),
    fontWeight: '400',
    fontFamily: fonts.Muli,
    textAlign: 'center',
  },
  profileicon: {
    height: moderateScale(15),
    width: moderateScale(15),
    marginRight: moderateScale(10),
  },
  iconcontainer: {
    flexDirection: 'row',
    marginTop: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: '500',
    color: colors.inputLabelColor,
    fontFamily: fonts.Muli,
  },
  chat_avatar: {
    height: moderateScale(125),
    width: moderateScale(125),
    borderRadius: moderateScale(60),
  },
  profileview: {
    backgroundColor: colors.DarkYellow,
    height: moderateScale(120),
  },
  containerview: {
    marginHorizontal: moderateScale(20),
    marginTop: verticalScale(20),
    borderRadius: 10,
    borderWidth: 1,
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: colors.White,
    borderColor: colors.borderColor,
    shadowColor: colors.Black,
    shadowOffset: {width: 0, height: 1},
    padding: moderateScale(15),
  },
  aboutitle: {
    fontSize: moderateScale(20),
    // fontWeight: '500',
    color: colors.inputLabelColor,
    fontFamily: fonts.Muli,
  },
  aboutxt: {
    fontSize: moderateScale(15),
    // fontWeight: '500',
    marginTop: moderateScale(10),
    color: colors.inputLabelColor,
    fontFamily: fonts.Muli,
  },
  buttonView: {
    marginHorizontal: moderateScale(110),
    marginTop: moderateScale(40),
  },
  modacontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subview: {
    height: moderateScale(150),
    width: Dimensions.get('screen').width / 1,
    backgroundColor: colors.White,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  iconview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
  camaraview: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageview: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(80),
    borderWidth: 0.6,

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.DarkYellow,
  },
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    tintColor: colors.DarkYellow,
  },
  modaltxt: {
    fontSize: 12,
    marginTop: 5,
    color: colors.DarkYellow,
  },
});

export default styles;
