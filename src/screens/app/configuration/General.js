import Slider from '@react-native-community/slider';
import Thumb from '~assets/images/sliderThumb.png';
import Heart from '~assets/images/smallHeart.png';
import { signOut } from '~backend/firebase';
import { Br, Button, Select } from '~components';
import RadioOffSvg from '~components/radioOff';
import RadioOnSvg from '~components/radioOn';
import { logout } from '~redux/slices/authSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles';

const General = ({userInfo, navigation, setUserInfo}) => {
  const INITIAL_DISTANCE = userInfo?.distance;
  const [ageRange, setAgeRange] = useState('18-37');
  const [distance, setDistance] = useState(userInfo?.distance);
  const dispatch = useDispatch();
  const onAgeChange = val => {
    if (val <= 1) {
      setAgeRange('18-25');
    } else if (val > 1 && val <= 2) {
      setAgeRange('25-35');
    } else if (val > 2 && val <= 3) {
      setAgeRange('35-45');
    } else if (val > 3) {
      setAgeRange('45+');
    }
  };
  return (
    <View style={styles.accountContainer}>
      <Select
        label={'Location'}
        defaultValue={'My Current Location'}
        onPress={() =>
          navigation.navigate(ScreenNames.ConnectedAccountsScreen, {
            screenType: 'Location',
          })
        }
      />
      <Br />
      <View style={styles.row}>
        <Text style={[styles.sectionTitle2, {flex: 1}]}>
          Distance preference
        </Text>
        <Text style={styles.sectionTitle}>{distance.toFixed(0)} km</Text>
      </View>
      <Slider
        value={INITIAL_DISTANCE}
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor={AppColors.bgGrey}
        minimumTrackTintColor={AppColors.purple}
        onValueChange={val => setDistance(val)}
        thumbImage={Thumb}
      />
      <View style={styles.row}>
        <Text style={[styles.descr, styles.rowDescr]}>
          Only show people within this range
        </Text>
        <TouchableOpacity
          onPress={() =>
            setUserInfo(prev => ({
              ...prev,
              showWithinRangeDistance: !prev?.showWithinRangeDistance,
            }))
          }
          activeOpacity={0.7}>
          {userInfo?.showWithinRangeDistance ? <RadioOnSvg /> : <RadioOffSvg />}
        </TouchableOpacity>
      </View>
      <Br />
      <Select
        label={'Show me'}
        defaultValue={'Men'}
        value={userInfo?.showMe}
        onPress={() =>
          navigation.navigate(ScreenNames.GenderScreen, {isShowMeScreen: true})
        }
      />
      <Br />
      <View style={styles.row}>
        <Text style={[styles.sectionTitle2, {flex: 1}]}>Age preference</Text>
        <Text style={styles.sectionTitle}>{ageRange}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={4}
        maximumTrackTintColor={AppColors.bgGrey}
        minimumTrackTintColor={AppColors.purple}
        onValueChange={onAgeChange}
        thumbImage={Thumb}
      />
      <View style={[styles.row, {marginTop: height(2)}]}>
        <Text style={[styles.descr, styles.rowDescr]}>
          Only show people within this range
        </Text>
        <TouchableOpacity
          onPress={() =>
            setUserInfo(prev => ({
              ...prev,
              showWithinRangeAge: !prev?.showWithinRangeAge,
            }))
          }
          activeOpacity={0.7}>
          {userInfo?.showWithinRangeAge ? <RadioOnSvg /> : <RadioOffSvg />}
        </TouchableOpacity>
      </View>
      <View style={[styles.row, {marginTop: height(2)}]}>
        <Text style={[styles.sectionTitle2, {flex: 1}]}>Global</Text>
        <TouchableOpacity
          onPress={() =>
            setUserInfo(prev => ({
              ...prev,
              isGlobal: !prev?.isGlobal,
            }))
          }
          activeOpacity={0.7}>
          {userInfo?.isGlobal ? <RadioOnSvg /> : <RadioOffSvg />}
        </TouchableOpacity>
      </View>
      <Text style={[styles.descr, styles.global]}>
        By going global, you'll be able to see people from nearby areas and all
        over the world.
      </Text>
      <View style={[styles.row, {marginTop: height(2)}]}>
        <Text style={[styles.sectionTitle2, {flex: 1}]}>Show me on Ulikme</Text>
        <TouchableOpacity
          onPress={() =>
            setUserInfo(prev => ({
              ...prev,
              showMeOnUlikeme: !prev?.showMeOnUlikeme,
            }))
          }
          activeOpacity={0.7}>
          {userInfo?.showMeOnUlikeme ? <RadioOnSvg /> : <RadioOffSvg />}
        </TouchableOpacity>
      </View>
      <Text style={[styles.descr, styles.global]}>
        If this option is turned off, you won't appear in the profile stack. The
        people you liked can still view your profile and match you. You can
        still see and chat with your matches.
      </Text>
      <Br />
      <Select
        label={'Block contacts'}
        defaultValue={'243 blocked contacts'}
        value={`${userInfo?.blockCount} blocked contacts`}
        onPress={() => navigation.navigate(ScreenNames.BlockedContactsScreen)}
      />
      <Text style={[styles.descr, styles.global]}>
        Choose people from your contact list that you don't want to see or who
        see you on Ulikme
      </Text>
      <Br />
      <View style={styles.row}>
        <Text style={[styles.descr, styles.rowDescr]}>
          Reading confirmations
        </Text>
        <TouchableOpacity
          onPress={() =>
            setUserInfo(prev => ({
              ...prev,
              isReadingConfirmations: !prev?.isReadingConfirmations,
            }))
          }
          activeOpacity={0.7}>
          {userInfo?.isReadingConfirmations ? <RadioOnSvg /> : <RadioOffSvg />}
        </TouchableOpacity>
      </View>
      <Br />
      <View style={styles.row}>
        <Text style={[styles.descr, styles.rowDescr]}>
          Recent activity status
        </Text>
        <TouchableOpacity
          onPress={() =>
            setUserInfo(prev => ({
              ...prev,
              recentActivityStatus: !prev?.recentActivityStatus,
            }))
          }
          activeOpacity={0.7}>
          {userInfo?.recentActivityStatus ? <RadioOnSvg /> : <RadioOffSvg />}
        </TouchableOpacity>
      </View>
      <Br />
      <Button type={'secondary'} title={'Share Ulikme'} />
      <Br />
      <Select
        label={'Contact us'}
        defaultValue={'Help and Assistance'}
        onPress={() => {}}
      />
      <Br />
      <Text style={[styles.sectionTitle2, styles.community]}>Community</Text>
      <Select defaultValue={'Community Principles'} onPress={() => {}} />
      <Select defaultValue={'Safety Tips'} onPress={() => {}} />
      <Br />
      <Text style={[styles.sectionTitle2, styles.community]}>Legal</Text>
      <Select defaultValue={'Privacy Policy'} onPress={() => {}} />
      <Select defaultValue={'Terms of Service'} onPress={() => {}} />
      <Select defaultValue={'Licenses'} onPress={() => {}} />
      <Select defaultValue={'Privacy preferences'} onPress={() => {}} />
      <Br />
      <Button title={'Sign out'} onPress={() => {
        dispatch(logout({}))
        signOut();
      }
        } />
      <Br invisible half />
      <View
        style={[styles.row, {justifyContent: 'center', marginLeft: -width(2)}]}>
        <Image source={Heart} resizeMode={'contain'} style={styles.heart} />
        <Text style={styles.version}>Versión 1.1.1</Text>
      </View>
      <Br invisible half />
      <Button type={'secondary'} title={'Delete Account'} />
      <Br invisible />
    </View>
  );
};

export default General;
