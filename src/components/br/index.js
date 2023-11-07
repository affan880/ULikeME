import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import AppColors from '~utills/AppColors';
import {height} from '~utills/Dimension';
import styles from './styles';

const Br = ({invisible = false, half = false}) => {
  return (
    <View
      style={[
        styles.break,
        {backgroundColor: invisible ? AppColors.transparent : AppColors.grey},
        {
          marginVertical: half ? height(1.5) : height(3),
        },
      ]}
    />
  );
};

export default Br;
