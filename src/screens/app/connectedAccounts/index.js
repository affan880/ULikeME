import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Br, ScreenWrapper} from '~components';
import {SimpleHeader} from '~components/Header';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import RadioOffSvg from '~components/radioOff';
import RadioOnSvg from '~components/radioOn';
import AppColors from '~utills/AppColors';
import styles from './styles';
export default function ConnectedAccounts({navigation, route}) {
  const screenType = route?.params?.screenType || 'ConnectedAccounts'; // same screen for location and connected accounts
  const [appleAuth, setAppleAuth] = useState(false);
  const [gmailAuth, setGmailAuth] = useState(true);
  const [location, setLocation] = useState(true);
  return (
    <ScreenWrapper
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}
      headerUnScrollable={() => (
        <SimpleHeader
          navigation={navigation}
          title={
            screenType === 'ConnectedAccounts'
              ? 'Connnected Accounts'
              : 'Location'
          }
        />
      )}>
      <View style={styles.mainViewContainer}>
        {screenType === 'ConnectedAccounts' ? (
          <>
            <View style={styles.row}>
              <Text style={[styles.sectionTitle2, {flex: 1}]}>
                Sign in with Apple
              </Text>
              <TouchableOpacity
                onPress={() => setAppleAuth(prev => !prev)}
                activeOpacity={0.7}>
                {appleAuth ? <RadioOnSvg /> : <RadioOffSvg />}
              </TouchableOpacity>
            </View>
            <Br />
            <View style={styles.row}>
              <Text style={[styles.sectionTitle2, {flex: 1}]}>
                Sign in with Gmail
              </Text>
              <TouchableOpacity
                onPress={() => setGmailAuth(prev => !prev)}
                activeOpacity={0.7}>
                {gmailAuth ? <RadioOnSvg /> : <RadioOffSvg />}
              </TouchableOpacity>
            </View>
            <Br />
          </>
        ) : (
          <>
            <View style={styles.row}>
              <Text style={[styles.sectionTitle2, {flex: 1}]}>
                Activate current location
              </Text>
              <TouchableOpacity
                onPress={() => setLocation(prev => !prev)}
                activeOpacity={0.7}>
                {location ? <RadioOnSvg /> : <RadioOffSvg />}
              </TouchableOpacity>
            </View>
            <Br />
          </>
        )}
        <HeartLeftSvg style={styles.leftNot} />
        <HeartRightSvg style={styles.rightNot} />
      </View>
    </ScreenWrapper>
  );
}
