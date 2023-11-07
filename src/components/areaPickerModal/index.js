import { Picker } from '@react-native-picker/picker';
import { Button, CrossSvg } from '~components';
import AppColors from '~utills/AppColors';
import { height } from '~utills/Dimension';
import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

const AreaPickerModal = ({
  isVisible,
  setPlace,
  place,
  close,
  title = 'Available Areas',
  areaArray = ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5'],
}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.centerView}>
          <TouchableOpacity activeOpacity={0.7} onPress={close}>
            <CrossSvg style={styles.cross} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <Picker
            style={styles.picker}
            dropdownIconColor={AppColors.purple}
            dropdownIconRippleColor={AppColors.purple50}
            itemStyle={{
              color: AppColors.purple,
            }}
            selectedValue={place}
            onValueChange={itemValue => setPlace(itemValue)}>
            {areaArray.map((item, index) => (
              <Picker.Item key={`key-${index}`} label={item} value={item} />
            ))}
          </Picker>
          <Button
            onPress={close}
            title={'Select'}
            containerStyle={styles.btn}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AreaPickerModal;
