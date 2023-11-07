import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {Button, CrossSvg} from '~components';
import AppColors from '~utills/AppColors';
import {height} from '~utills/Dimension';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';

const AreYouSureModal = ({isVisible, close, text = 'Are you sure'}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.centerView}>
          <TouchableOpacity activeOpacity={0.7} onPress={close}>
            <CrossSvg style={styles.cross} />
          </TouchableOpacity>
          <Text style={styles.title}>{text}</Text>
          <Button
            onPress={close}
            title={'Accept'}
            containerStyle={styles.btn}
          />
          <Button
            type="secondary"
            onPress={close}
            title={'Cancel'}
            containerStyle={styles.btn}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AreYouSureModal;
