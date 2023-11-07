import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
import HeaderLogo from '~assets/images/appLogo2.png';
import CenterHeart from '~assets/images/heartSilver.png';
import Instagram from '~assets/images/instagram.png';
import Spotify from '~assets/images/spotify.png';
import {
  Br,
  Button,
  GalleryModal,
  ScreenWrapper,
  SmallPlusSvg,
  TutorialPager,
} from '~components';
import EmotionButtons from '~components/emotionButtons';
import {SimpleHeader} from '~components/Header';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import {height, width} from '~utills/Dimension';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import ArrowDownSvg from '~components/arrowDownSvg';
export default function Verification({navigation, route}) {
  const [galleryModalVisible, setGalleryModalVisible] = useState(false);
  const [photo, setPhoto] = useState('');
  const [pickerVisible, setPickerVisible] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [country, setCountry] = useState({
    callingCode: ['1684'],
    cca2: 'AS',
    currency: ['USD'],
    flag: 'flag-as',
    name: 'American Samoa',
    region: 'Oceania',
    subregion: 'Polynesia',
  });
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}
      headerUnScrollable={() => (
        <SimpleHeader title="Verification" navigation={navigation} />
      )}>
      <View style={styles.mainViewContainer}>
        <Text style={[styles.greyText, CommonStyles.marginTop_2]}>
          Get the Verified Badge Complete 2 or more verification steps to get a
          “Verified” badge on your profile
        </Text>
        <Br />
        <Text style={styles.sectionTitle}>Photo</Text>
        <Text style={[styles.greyText, CommonStyles.marginTop_2]}>
          The verification photo will not be visible to users
        </Text>
        <View style={styles.photoContainer}>
          <TouchableOpacity
            onPress={() => setGalleryModalVisible(true)}
            activeOpacity={0.7}
            style={styles.plus}>
            <SmallPlusSvg />
          </TouchableOpacity>
          <Image source={{uri: photo}} style={styles.photo} />
        </View>
        <Button
          type={'secondary'}
          title={'Selfie Verification'}
          containerStyle={styles.selfieBtn}
        />
        <Br />
        <Text style={styles.sectionTitle}>Mobile number</Text>
        <Text style={[styles.greyText, CommonStyles.marginTop_2]}>
          The mobile number will not be visible to other users and can be used
          to log in
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setPickerVisible(true)}
            activeOpacity={0.7}
            style={styles.innerRow}>
            <CountryPicker
              visible={pickerVisible}
              withFilter
              withFlag
              withCallingCode
              countryCode={country?.cca2}
              onSelect={country => {
                console.log(country);
                setCountry(country);
                setPickerVisible(false);
              }}
            />
            <Text style={styles.codeText}>+{country?.callingCode[0]}</Text>
            <ArrowDownSvg style={{marginLeft: 2}} />
          </TouchableOpacity>
          <TextInput
            style={styles.phoneNumberInput}
            onChangeText={value => setPhoneNum(value.replace(/[^0-9]/g, ''))}
            value={phoneNum}
            keyboardType={'number-pad'}
          />
        </View>
        <Button
          type={'secondary'}
          title={'Verify mobile phone number'}
          containerStyle={styles.selfieBtn}
        />
        <Br />
        <View style={[styles.row, {marginTop: 0}]}>
          <Text style={styles.sectionTitle}>Instagram</Text>
          <Image
            source={Instagram}
            resizeMode={'contain'}
            style={styles.insta}
          />
        </View>
        <Button
          type={'secondary'}
          title={'Verify Instagram account'}
          containerStyle={styles.selfieBtn}
        />
        <Br />
        <View style={[styles.row, {marginTop: 0}]}>
          <Text style={styles.sectionTitle}>Spotify</Text>
          <Image source={Spotify} resizeMode={'contain'} style={styles.insta} />
        </View>
        <Button
          type={'secondary'}
          title={'Verify Spotify account'}
          containerStyle={styles.selfieBtn}
        />
        <Br invisible />
      </View>
      <GalleryModal
        isVisible={!!galleryModalVisible}
        onImageSelect={uri => {
          setPhoto(uri);
          setGalleryModalVisible(false);
        }}
        onClose={() => setGalleryModalVisible(false)}
      />
    </ScreenWrapper>
  );
}
