import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import AppColors from '~utills/AppColors';
import {UserEventType} from '~utills/Enums';
import styles from './styles';
import Like from '~assets/images/like.png';
import Heart from '~assets/images/heart.png';
import Ulikeme from '~assets/images/user_ulikeme.png';
import Calendar from '~assets/images/calendar_icon.png';
import {width} from '~utills/Dimension';
import CrossSvg from '~components/crossSvg';

const UserEvent = ({data, renderRight = null}) => {
  let image;
  let style = {};
  switch (data?.type) {
    case UserEventType.LIKE:
      image = Like;
      style = {
        width: width(6.5),
      };
      break;
    case UserEventType.MATCH:
      image = Heart;
      style = {
        width: width(6.5),
      };
      break;
    case UserEventType.ULIKEME:
      image = Ulikeme;
      style = {
        width: width(15),
        marginRight: width(4),
      };
      break;
    case UserEventType.DATE:
      image = Calendar;
      style = {
        width: width(6.5),
      };
      break;

    default:
      break;
  }
  return (
    <View style={styles.container}>
      <Image source={data?.image} style={styles.avatar} />
      <View style={[styles.textContainer, {flex: renderRight ? 0.95 : 0.8}]}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.subtitle}>{data?.subtitle}</Text>
      </View>
      {!renderRight ? (
        <>
          <View style={{paddingHorizontal: width(3), flex: 0.3}}>
            <Image source={image} style={style} resizeMode={'contain'} />
          </View>
          <CrossSvg stroke={'#E5E5E5'} style={{marginLeft: width(3)}} />
        </>
      ) : (
        renderRight()
      )}
    </View>
  );
};

export default UserEvent;
