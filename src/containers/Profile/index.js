import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ContentView from '../../components/ContentView';
import {
  pamela_circle,
  mailicon,
  location_icon,
  callicon,
  camera,
  folder,
} from '../../constants/assets';
import {moderateScale} from '../../helpers/ResponsiveFonts';
import styles from './styles';
import PrimaryButton from '../../components/Button/PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileRequest} from '../../redux/Action/ProfileAction';
import {useIsFocused} from '@react-navigation/native';
import {loaderAction} from '../../redux/Action/LoaderAction';
import Loader from '../../helpers/loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Imagepicker from 'react-native-image-picker';
const ProfileScreen = ({navigation}) => {
  const [profileData, setProfileData] = useState({});
  const [model, setmodel] = useState(false);
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const laderResponse = useSelector(state => state.loader);
  const ProfileResponse = useSelector(state => state.profile);

  useEffect(() => {
    if (ProfileResponse.data !== null && ProfileResponse.data !== undefined) {
      setProfileData(ProfileResponse.data.userInfo);
      let userUnfo = ProfileResponse.data.userInfo;
      setImage(userUnfo?.performer?.chat_avatar);
    }
  }, [ProfileResponse]);

  useEffect(() => {
    let payloade = {userid: '81a1446c-d760-4853-8710-77c0777b52c4'};
    dispatch(ProfileRequest(payloade));
    dispatch(loaderAction(true));
  }, [isFocused]);

  const chooseFile = () => {
    Imagepicker.launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      maxWidth: 300,
      maxHeight: 400,
    })
      .then(async image => {
        setImage(image.assets[0].uri);
        setmodel(false);
      })
      .catch(e => {
        setmodel(false);
      });
  };
  const openCamera = () => {
    Imagepicker.launchCamera({
      maxWidth: 300,
      maxHeight: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);

      setmodel(false);
    });
  };
  return (
    <View style={styles.container}>
      <ContentView visible={'true'} headerText={'Profile'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.profileview}>
              <TouchableOpacity
                onPress={() => setmodel(true)}
                style={styles.profileimage}>
                <Image
                  source={image !== '' ? {uri: image} : pamela_circle}
                  style={styles.chat_avatar}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', marginTop: moderateScale(70)}}>
              <Text style={styles.title}>
                {profileData?.first_name + ' ' + profileData?.last_name}
              </Text>
              <View style={styles.iconcontainer}>
                <Image
                  source={mailicon}
                  style={styles.profileicon}
                  resizeMode="contain"
                />
                <Text>{profileData?.email}</Text>
              </View>
              <View style={styles.iconcontainer}>
                <Image
                  source={location_icon}
                  resizeMode="contain"
                  style={styles.profileicon}
                />
                <Text>{profileData?.physicalAddress}</Text>
              </View>
              <View style={styles.iconcontainer}>
                <Image
                  source={callicon}
                  resizeMode="contain"
                  style={styles.profileicon}
                />
                <Text>{profileData?.performer?.us_format_phone_number}</Text>
              </View>
            </View>
            <View style={styles.containerview}>
              <Text style={styles.aboutitle}>About Me</Text>
              <Text style={styles.aboutxt}>
                {profileData?.biography?.description}
              </Text>
            </View>
            <View style={styles.buttonView}>
              <PrimaryButton
                buttonText={'Logout'}
                onPress={() => {
                  navigation.navigate('SignInScreen');
                  AsyncStorage.clear();
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ContentView>
      <Loader value={laderResponse.loader} />
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={model}
        onRequestClose={() => setmodel(false)}>
        <View style={styles.modacontainer}>
          {/* <TouchableWithoutFeedback onPress={() => setmodel(false)}> */}
          <View style={styles.subview}>
            <View style={styles.iconview}>
              <TouchableOpacity
                style={styles.camaraview}
                onPress={() => openCamera()}>
                <View style={styles.imageview}>
                  <Image source={camera} style={styles.image} />
                </View>
                <Text style={styles.modaltxt}>Open Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.camaraview}
                onPress={() => chooseFile()}>
                <View style={styles.imageview}>
                  <Image source={folder} style={styles.image} />
                </View>
                <Text style={styles.modaltxt}>Choose File</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </TouchableWithoutFeedback> */}
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;
