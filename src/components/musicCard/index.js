import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import Spotify from '~assets/images/spotify.png';

const MusicCard = ({musicData}) => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          style={styles.imgElevation}
          source={musicData?.album}
          resizeMode={'cover'}>
          <Image source={Spotify} style={styles.spotify} />
        </ImageBackground>
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {musicData.title}
      </Text>
      <Text numberOfLines={1} style={styles.subtitle}>
        {musicData.subtitle}
      </Text>
    </View>
  );
};

export default MusicCard;
