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
export default function Welcome({navigation, route}) {
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
    <ScreenWrapper
      transclucent
      backgroundImage={WelcomeBg}
      backgroundColor={AppColors.transparent}
      statusBarColor={AppColors.transparent}>
      <View style={styles.mainViewContainer}>
        <View style={styles.dimBlackContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            style={styles.back}>
            <BackArrowSvg />
          </TouchableOpacity>
          <Text style={styles.title}>Welcome to ULIKME</Text>
          <View style={styles.mid}>
            {renderSection()}
            {renderSection()}
            {renderSection()}
          </View>
          <Button
            title={'Accept'}
            onPress={() => navigation.navigate(ScreenNames.NameScreen)}
            containerStyle={{
              bottom: height(10),
              backgroundColor: AppColors.purple,
              position: 'absolute',
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
