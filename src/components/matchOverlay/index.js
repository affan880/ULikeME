import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '~utills/AppColors';
import styles from './styles';

const MatchOverlay = ({onBackdropPress = () => {}, leftPic, rightPic}) => {
  return (
    <>
      <LinearGradient
        colors={[AppColors.pink, AppColors.purple]}
        style={{
          flex: 1,
          opacity: 0.95,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.overlay}
          onPress={onBackdropPress}>
          <View style={styles.container}>
            <View style={styles.row}>
              <Image
                source={leftPic}
                style={styles.image}
                resizeMode={'contain'}
              />
              <Image
                source={rightPic}
                style={styles.image}
                resizeMode={'contain'}
              />
            </View>
            <Text style={styles.title}>It's a Match</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default MatchOverlay;
