import HeartOverlay from '~assets/images/heartReactOverlay.png';
import Man1 from '~assets/images/man1.png';
import Man2 from '~assets/images/man2.png';
import Match1 from '~assets/images/matchOverlay1.png';
import Match2 from '~assets/images/matchOverlay2.png';
import { likeProfile, showPotentialMatches, unlikeProfile } from '~backend/firebase';
import { Header, MatchOverlay, ScreenWrapper } from '~components';
import EmotionButtons from '~components/emotionButtons';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import { height, width } from '~utills/Dimension';
import { EmotionTypes } from '~utills/Enums';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
import { useSelector } from 'react-redux';

import styles from './styles';

export default function Matches({navigation, route}) {
  const [matches, setMatches] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [matchOverlay, setMatchOverlay] = useState(false);

  const userDetails = useSelector((state) => { return state.Auth.user})

  useEffect(()=>{
    showPotentialMatches().then((res)=>{
      setMatches(res)
    })
  },[])

  const renderPagerItem = (item, index) => {
    const onEmotionPressed = (emotiodId, matchId) => {
      const temp = [...matches];
      switch (emotiodId) {
        case EmotionTypes.LIKE:
          temp[matchId].isLiked = !temp[matchId].isLiked;
          likeProfile(userDetails.uid, item.id)
          setMatches(temp);
          break;
        case EmotionTypes.SHARE:
          break;
        case EmotionTypes.DISLIKE:
          unlikeProfile(userDetails.uid, item.id)
          temp[matchId].isDisliked = !temp[matchId].isDisliked;
          setMatches(temp);
          break;
        case EmotionTypes.HEART:
          temp[matchId].isHeart = !temp[matchId].isHeart;

          setMatches(temp);
          break;
      }
    };
    return (
      <View key={`${index}`} style={styles.pagerItem}>
        <ImageBackground source={{
          uri: item?.image
        }} style={styles.pagerImage}>
          <LinearGradient
            colors={[AppColors.transparent, AppColors.black]}
            style={styles.linearGradient}
          />

          {item.isHeart && !matchOverlay && (
            <LinearGradient
              start={{x: 0.5, y: 0.5}}
              colors={['#6735EC40', '#6735EC40', '#6735EC40']}
              style={{
                flex: 1,
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setMatchOverlay(true);
                }}>
                <Image
                  source={{
                    uri: item?.image
                  }}
                  style={{
                    width: width(50),
                    position: 'absolute',
                    top: height(12),
                    alignSelf: 'center',
                  }}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </LinearGradient>
          )}
          {item.isDisliked && (
            <View style={styles.nopeContainer}>
              <Text style={styles.nopeText}>NOPE</Text>
            </View>
          )}
          {item.isLiked && (
            <View style={styles.likeContainer}>
              <Text style={styles.likeText}>Like</Text>
            </View>
          )}

          <View style={styles.detailView}>
            <View style={{paddingHorizontal: width(5)}}>
              <View style={[CommonStyles.row, {marginBottom: height(1.5)}]}>
                {item?.interests.map((item, index) => (
                  <View key={`item-${index}`} style={styles.interestContainer}>
                    <Text style={styles.interestText}>{item}</Text>
                  </View>
                ))}
              </View>
              <View style={{maxWidth: width(80)}}>
                <Text style={styles.name}>{item?.name}</Text>
                <Text style={styles.descr}>{item?.descr}</Text>
              </View>
            </View>
            <EmotionButtons
              showMatchOverlay={emotion => {
                if (emotion?.id === 3) setMatchOverlay(true);
              }}
              onPress={id => onEmotionPressed(id, index)}
            />
          </View>
          {matchOverlay && (
            <MatchOverlay
              leftPic={Match1}
              rightPic={Match2}
              onBackdropPress={() => setMatchOverlay(false)}
            />
          )}
        </ImageBackground>
      </View>
    );
  };
  return (
    <ScreenWrapper
      backgroundColor={AppColors.bgWhite}
      headerUnScrollable={() => <Header />}>
      <View style={styles.mainViewContainer}>
        <PagerView
          style={{flex: 1}}
          initialPage={0}
          scrollEnabled={!matchOverlay}
          onPageSelected={state => setCurrentPage(state.nativeEvent.position)}>
          {matches.map((item, index) => renderPagerItem(item, index))}
        </PagerView>
        {!matchOverlay && (
          <View style={styles.pageDotsContainer}>
            {matches.map((item, index) => (
              <View
                key={`key-${index}`}
                style={styles.dots(index === currentPage)}
              />
            ))}
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
}
