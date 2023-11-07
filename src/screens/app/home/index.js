import HeaderLogo from '~assets/images/appLogo2.png';
import CenterHeart from '~assets/images/heartSilver.png';
import { ScreenWrapper, TutorialPager } from '~components';
import EmotionButtons from '~components/emotionButtons';
import { selectUser, userAdditionalInfo } from '~redux/slices/authSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import { height } from '~utills/Dimension';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { useSelector } from 'react-redux';

import styles from './styles';

export default function Home({navigation, route}) {
  const [showTutorial, setShowTutorial] = useState(true);
  const user = useSelector(userAdditionalInfo)
  return (
    <ScreenWrapper
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}>
      <View style={styles.mainViewContainer}>
        <Image
          source={HeaderLogo}
          style={styles.headerLogo}
          resizeMode={'contain'}
        />
        {showTutorial && (
          <TutorialPager endTutorial={() => setShowTutorial(false)} />
        )}
        {!showTutorial && (
          <View style={styles.purpleCircle}>
            <Image
              source={CenterHeart}
              style={styles.centerHeart}
              resizeMode={'contain'}
            />
          </View>
        )}
        {!showTutorial && (
          <WaveIndicator
            onLayout={() =>
              setTimeout(() => {
                navigation.replace(ScreenNames.MatchesScreen);
              }, 2000)
            }
            style={styles.wave}
            color={'#926EEB'}
            size={height(40)}
            count={3}
            animationDuration={2500}
          />
        )}
        <EmotionButtons
          style={styles.emotionContainer}
          onPress={id => {
            console.log('Callback: ', id);
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
