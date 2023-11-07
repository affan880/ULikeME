import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HeaderLogo from '~assets/images/headerLogo.png';
import HeaderLogo2 from '~assets/images/appLogo3.png';
import BackArrowSvg from '~components/backArrowSvg';
import Button from '~components/button';
import AppColors from '~utills/AppColors';
import {width} from '~utills/Dimension';
import styles from './styles';
export default function Header({
  backgroundColor = AppColors.white,
  logoType = 1,
}) {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Image
        source={logoType == 1 ? HeaderLogo : HeaderLogo2}
        style={{width: width(25)}}
        resizeMode={'contain'}
      />
    </View>
  );
}
export const ChatHeader = ({
  name = '? ? ?',
  onlineStatus = false,
  showBtn,
  navigation,
  onPress = () => {},
}) => {
  return (
    <View style={styles.chatHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrowSvg />
      </TouchableOpacity>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.status} />
      <Button
        onPress={onPress}
        title={'Ready to meet'}
        containerStyle={styles.btn}
      />
    </View>
  );
};
export const SimpleHeader = ({
  title = '? ? ?',
  rightIcon,
  flipColors = false,
  navigation,
  rightPress = () => {},
}) => {
  return (
    <View
      style={[
        styles.simpleContainer,
        {backgroundColor: flipColors ? AppColors.purple : AppColors.bgWhite},
      ]}>
      <TouchableOpacity
        style={styles.corner}
        onPress={() => navigation.goBack()}>
        <BackArrowSvg fill={flipColors ? AppColors.white : false} />
      </TouchableOpacity>
      <View style={styles.simpleMiddle}>
        <Text
          style={[
            styles.simpleTitle,
            {color: flipColors ? AppColors.white : AppColors.darkPurple},
          ]}>
          {title}
        </Text>
      </View>
      <TouchableOpacity style={styles.corner} onPress={rightPress}>
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};
