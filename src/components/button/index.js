import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import AppColors from '~utills/AppColors';
import styles from './styles';

const Button = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  type = 'primary',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[type === 'primary' ? styles.primary(disabled) : styles.secondary, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="small" />
      ) : (
        <Text style={[type === 'primary' ? styles.primaryText : styles.secondaryText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
