import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Button, ScreenWrapper} from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import WelcomeBg from '~assets/images/welcomeBg.png';
import styles from './styles';
import AppColors from '~utills/AppColors';
import SmallHeart from '~assets/images/smallHeart.png';
import {height} from '~utills/Dimension';
import ScreenNames from '~routes/routes';
export default function UnderDevelopmentScreen({navigation, route}) {
  const renderSection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Image
          source={SmallHeart}
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text style={styles.descr}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor .
        </Text>
      </View>
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Text
          style={{
            color: AppColors.black,
            fontSize: height(3),
            fontWeight: 'bold',
          }}>
          UNDER DEVELOPMENT
        </Text>
      </View>
    </ScreenWrapper>
  );
}
