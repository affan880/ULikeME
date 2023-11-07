import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button, CrossSvg} from '~components';
import AppColors from '~utills/AppColors';
import {height} from '~utills/Dimension';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import Gallery from '~assets/images/gallery.png';
import Camera from '~assets/images/camera.png';

const GalleryModal = ({isVisible, onImageSelect, onClose = () => {}}) => {
  const openCamera = () => {
    ImageCropPicker.openCamera({
      mediaType: 'photo',
      compressImageQuality: 0.2,
    }).then(image => {
      if (image) onImageSelect(image.path);
      return false;
    });
  };
  const openPicker = () => {
    ImageCropPicker.openPicker({
      mediaType: 'photo',
      compressImageQuality: 0.2,
    }).then(image => {
      if (image) onImageSelect(image.path);
      return false;
    });
  };
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      onBackdropPress={onClose}
      avoidKeyboard={true}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.7}
          style={styles.cross}>
          <CrossSvg />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openCamera}
          activeOpacity={0.7}
          style={styles.row}>
          <Image source={Camera} resizeMode={'contain'} style={styles.img} />
          <Text style={styles.camera}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openPicker}
          activeOpacity={0.7}
          style={[styles.row, {borderBottomColor: 'transparent'}]}>
          <Image source={Gallery} resizeMode={'contain'} style={styles.img2} />
          <Text style={styles.camera}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default GalleryModal;
