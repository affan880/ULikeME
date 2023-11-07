import React, {useLayoutEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, ScreenWrapper} from '~components';
import Thumb from '~assets/images/sliderThumb.png';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Slider from '@react-native-community/slider';
import styles from './styles';
import ScreenNames from '~routes/routes';
import {useDispatch} from 'react-redux';
import { setBottomTabVisible } from '~redux/slices/configSlice';
export default function AgePreference({navigation, route}) {
  const [ageRange, setAgeRange] = useState('18-37');
  const dispatch = useDispatch();
  const onSlide = val => {
    if (val <= 20) {
      setAgeRange('18-25');
    } else if (val > 20 && val <= 50) {
      setAgeRange('25-35');
    } else if (val > 50 && val <= 75) {
      setAgeRange('35-45');
    } else if (val > 75) {
      setAgeRange('45+');
    }
  };
  useLayoutEffect(() => {
    dispatch(setBottomTabVisible(false));
    return () => dispatch(setBottomTabVisible(true));
  }, []);
  return (
    <ScreenWrapper statusBarColor={AppColors.bgWhite}>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.back}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text style={styles.title}>Age preference</Text>
        <Text style={styles.ageRange}>{ageRange}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          maximumTrackTintColor={AppColors.bgGrey}
          minimumTrackTintColor={AppColors.purple}
          onValueChange={onSlide}
          thumbImage={Thumb}
        />
        <Button
          onPress={() => navigation.replace(ScreenNames.EditProfileScreen)}
          title={'Continue'}
          containerStyle={{marginTop: height(10)}}
        />
      </View>
    </ScreenWrapper>
  );
}
