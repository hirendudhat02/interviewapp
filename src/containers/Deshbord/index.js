import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, Image} from 'react-native';
import ContentView from '../../components/ContentView';
import {
  user_icon,
  search_white_icon,
  pamela_circle,
  sam_circle,
  peachy_circle,
  location_icon,
  profile_icon,
  chat_icon,
} from '../../constants/assets';
import {moderateScale} from '../../helpers/ResponsiveFonts';
import colors from '../../constants/colors';
import styles from './styles';
import TextInputWithLabelComponent from '../../components/TextInputWithLabel';

let StaticData = [
  {
    name: 'Peachy Mendoza',
    address: 'Chandler, AZ',
    profile: pamela_circle,
  },
  {
    name: 'Sam Bob',
    address: 'Phoenix, AZ',
    profile: sam_circle,
  },
  {
    name: 'Pamela Safford',
    address: 'Scottsdale, AZ',
    profile: peachy_circle,
  },
  {
    name: 'Peachy Mendoza',
    address: 'Chandler, AZ',
    profile: pamela_circle,
  },
  {
    name: 'Sam Bob',
    address: 'Phoenix, AZ',
    profile: sam_circle,
  },
  {
    name: 'Pamela Safford',
    address: 'Scottsdale, AZ',
    profile: peachy_circle,
  },
];

const DeshbordScreen = ({navigation}) => {
  const [data, setData] = useState(StaticData);
  const [search, setSearch] = useState('');
  const searchHistory = text => {
    let temp = StaticData;
    if (text) {
      const newData = temp.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) !== -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(temp);
      setSearch(text);
    }
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        // disabled={touchable ? false : true}
        // onPress={}
        style={styles.flatlistcontainer}>
        <View style={styles.mainContainer}>
          <View style={styles.userDetailsContainer}>
            <View style={{marginHorizontal: moderateScale(10)}}>
              <Image
                source={item.profile}
                resizeMode="contain"
                style={{height: moderateScale(50), width: moderateScale(50)}}
              />
            </View>
            <View style={{marginHorizontal: moderateScale(15)}}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  source={location_icon}
                  resizeMode="contain"
                  style={styles.addressicon}
                />
                <Text style={styles.addresstxt}>{item.address}</Text>
              </View>

              <View
                style={{flexDirection: 'row', marginTop: moderateScale(15)}}>
                <View style={styles.chatbutton}>
                  <Image
                    source={chat_icon}
                    style={{
                      height: moderateScale(20),
                      width: moderateScale(20),
                    }}
                  />
                </View>
                <View style={styles.profilebutton}>
                  <Image source={profile_icon} style={styles.profileimage} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <ContentView
        visible={'true'}
        iconVisible={true}
        rightIcon={user_icon}
        headerText={'Dashboard'}>
        <View style={styles.contentView}>
          <TextInputWithLabelComponent
            icon={search_white_icon}
            iconPress={true}
            inputPlaceholder={'Search'}
            inputValue={search}
            onTextInputChange={text => searchHistory(text)}
            inputMaxLength={60}
            keyboardType="email-address"
          />

          <FlatList
            data={data}
            contentContainerStyle={{paddingBottom: moderateScale(20)}}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* </ScrollView> */}
      </ContentView>
    </View>
  );
};

export default DeshbordScreen;
