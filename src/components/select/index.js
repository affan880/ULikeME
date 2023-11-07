import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import AppColors from '~utills/AppColors';
import BackArrowSvg from '~components/backArrowSvg';
import styles from './styles';

const Select = ({label, value, onPress, defaultValue}) => (
  <View style={styles.selectContainer}>
    <View style={{flex: 0.99}}>
      {label && <Text style={styles.subtitle}>{label}</Text>}
      <Text style={styles.descr}>
        {value && value !== '' ? value : defaultValue}
      </Text>
    </View>
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <BackArrowSvg fill={AppColors.purple} style={styles.rotation} />
    </TouchableOpacity>
  </View>
);

export default Select;
