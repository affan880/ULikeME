import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import AppColors from '~utills/AppColors';
import styles from './styles';

const IconButton = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  icon = null
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.secondary, containerStyle]}>
      <View style={styles.icon}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.secondaryText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
