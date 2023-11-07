import { Button, ScreenWrapper } from '~components';
import ArrowDownSvg from '~components/arrowDownSvg';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import { height, width } from '~utills/Dimension';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { useDispatch } from 'react-redux';

import styles from './styles';
import { signInWithPhoneNumber } from '~backend/firebase';

export default function Signin({navigation, route}) {
  const isFromLogin = route?.params?.isFromLogin || false;
  const dispatch = useDispatch();
  const [pickerVisible, setPickerVisible] = useState(false);
  const [country, setCountry] = useState({
    callingCode: ['1684'],
    cca2: 'AS',
    currency: ['USD'],
    flag: 'flag-as',
    name: 'American Samoa',
    region: 'Oceania',
    subregion: 'Polynesia',
  });
  const [phoneNum, setPhoneNum] = useState('');
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.back}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text style={styles.title}>My number is</Text>
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
        <Text style={styles.description}>
          We'll send you a text message with a verification code. Message and
          data rates may apply. Know what happens when your number changes.
        </Text>
        <Button
          onPress={() =>{
            signInWithPhoneNumber(`+${country?.callingCode}${phoneNum}`).then((res)=>{
              navigation.navigate(ScreenNames.CodeScreen, {
              isFromLogin: isFromLogin,
              confirmation : res
            })
            })
          }
          }
          title={'Continue'}
          containerStyle={{marginTop: height(10)}}
        />
      </View>
    </ScreenWrapper>
  );
}
