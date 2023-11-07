import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppColors from '~utills/AppColors';
import styles from './styles';
import StatusImg1 from '~assets/images/statusOverlay1.png';
import StatusImg2 from '~assets/images/statusOverlay2.png';
import StatusImg3 from '~assets/images/statusOverlay3.png';
import ReadyToMeet from '~assets/images/readyToMeetOverlay.png';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '~utills/Dimension';
const StatusOverlay = ({status = 1, close = () => {}}) => {
  const data = [
    {
      colors: [AppColors.pink, AppColors.purple],
      image: StatusImg1,
    },
    {
      colors: ['#E03E3E', '#9C2020', '#9C2020', '#530000'],
      image: StatusImg2,
    },
    {
      colors: ['#2672B3', '#1A90B4', '#0DAFB5'],
      image: StatusImg3,
    },
    {
      colors: [AppColors.pink, AppColors.purple],
      image: ReadyToMeet,
    },
  ];
  const selected = data[status - 1];
  return (
    <>
      <LinearGradient colors={selected.colors} style={styles.container}>
        <TouchableOpacity activeOpacity={1} onPress={close}>
          {selected.image && (
            <Image
              source={selected.image}
              resizeMode={'contain'}
              style={styles.img}
            />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default StatusOverlay;
