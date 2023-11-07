import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button, ScreenWrapper} from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import {height} from '~utills/Dimension';
import styles from './styles';
import SelectedCircle from '~assets/images/selectedCircle.png';

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function EmailVerification({navigation, route}) {
  const [email, setEmail] = useState('');
 
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
        <Text style={styles.title}>My email is</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.phoneNumberInput}
            onChangeText={value => setEmail(value)}
            value={email}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
          />
        </View>
        <View style={styles.btmRow}>
          <Image
            source={SelectedCircle}
            style={styles.img}
            resizeMode={'contain'}
          />
          <Text style={styles.description}>Your email was verified</Text>
        </View>
        <Button
          type={'secondary'}
          disabled={!emailReg.test(email)}
          title={'Send verification email'}
          containerStyle={{marginTop: height(15)}}
        />
      </View>
    </ScreenWrapper>
  );
}
