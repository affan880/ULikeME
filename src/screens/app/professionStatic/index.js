import React, {useLayoutEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {BigHeartSvg, BriefcaseSvg, ScreenWrapper} from '~components';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import {setBottomTabVisible} from '~redux/slices/configSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import styles from './styles';

export default function ProfessionalStatic({navigation, route}) {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(setBottomTabVisible(false));
    return () => dispatch(setBottomTabVisible(true));
  }, []);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} />
        <BigHeartSvg style={styles.bottomHeart} />
        <Text style={styles.title}>
          Which one is your professional position?
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            navigation.replace(ScreenNames.ProfesionScreen, {
              isFirstTime: true,
            })
          }>
          <BriefcaseSvg />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
