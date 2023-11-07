import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import WomanBg from '~assets/images/womanTut1.png';
import TapIcon from '~assets/images/tap.png';
import LikeIcon from '~assets/images/like.png';
import ShareIcon from '~assets/images/yellowShare.png';
import HeartIcon from '~assets/images/heart.png';
import ManBg from '~assets/images/manTut2.png';
import RedCrossIcon from '~assets/images/crossRed.png';
import TutBg3 from '~assets/images/tut3.png';
import Heart from '~assets/images/smallHeart.png';
import Face from '~assets/images/centerImage.png';
import Button from '~components/button';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import styles from './styles';
import HeartLeftSvg from '~components/heartLeftSvg';
import CommonStyles from '~utills/CommonStyles';

const TutorialPager = ({endTutorial}) => {
  const [slides, setSlides] = useState([
    {
      render: index => (
        <ImageBackground
          key={`key=${index}`}
          source={WomanBg}
          style={styles.imageBg}>
          <View style={styles.pagerItem}>
            <Text style={styles.title}>Let's get started!</Text>
            <Text style={styles.subtitle}>User Name</Text>
            <Button title={'Start Tutorial'} containerStyle={styles.btn} />
          </View>
        </ImageBackground>
      ),
    },
    {
      render: index => (
        <ImageBackground
          key={`key=${index}`}
          source={WomanBg}
          style={styles.imageBg}>
          <View style={styles.pagerItem}>
            <Image source={TapIcon} resizeMode={'contain'} style={styles.tap} />
            <View style={styles.section}>
              <Image
                source={LikeIcon}
                resizeMode={'contain'}
                style={styles.like}
              />
              <Text style={styles.smallText}>Swipe right to LIKE</Text>
            </View>
            <View style={styles.section}>
              <Image
                source={ShareIcon}
                resizeMode={'contain'}
                style={styles.like}
              />
              <Text style={styles.smallText}>
                This action allows you to roll back your choices.
              </Text>
            </View>
            <View style={styles.section}>
              <Image
                source={HeartIcon}
                resizeMode={'contain'}
                style={styles.like}
              />
              <Text style={styles.smallText}>
                The Ulikme action allows us to send a message directly to the
                appointment you like
              </Text>
            </View>
            <View style={styles.section}>
              <Image
                source={RedCrossIcon}
                resizeMode={'contain'}
                style={styles.like}
              />
              <Text style={styles.smallText}>
                With the NOPE action it allows you to follow if you don't
                Interest
              </Text>
            </View>
          </View>
        </ImageBackground>
      ),
    },
    {
      render: index => (
        <ImageBackground
          key={`key=${index}`}
          source={ManBg}
          style={styles.imageBg}>
          <View style={styles.pagerItem}>
            <Image source={Face} resizeMode={'contain'} style={styles.face} />
            <Text style={styles.smallText}>
              You can also use facial interaction to perform all the actions.
            </Text>
            <Button
              type={'secondary'}
              title={'Active facial recognition'}
              containerStyle={styles.faceBtn}
            />
          </View>
        </ImageBackground>
      ),
    },
    {
      render: index => (
        <ImageBackground
          key={`key=${index}`}
          source={TutBg3}
          style={styles.imageBg}>
          <View style={styles.pagerItem}>
            <Image source={Heart} resizeMode={'contain'} style={styles.heart} />
            <Text style={styles.readyText}>Ready to meet</Text>
            <Text style={styles.centerText}>
              Promotions with thousands of establishments
            </Text>
            <Button
              onPress={endTutorial}
              title={'Lets start'}
              containerStyle={[styles.btn, {marginTop: height(10)}]}
            />
          </View>
        </ImageBackground>
      ),
    },
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View
      style={{
        zIndex: 1,
      }}>
      <PagerView
        style={{
          width: width(100),
          height: height(84),
        }}
        initialPage={0}
        onPageSelected={state => setCurrentPage(state.nativeEvent.position)}>
        {slides.map((item, index) => item.render(index))}
      </PagerView>
      <View style={styles.row}>
        {slides.map((item, index) => (
          <View
            key={`key-${index}`}
            style={index === currentPage ? styles.dotsActive : styles.dots}
          />
        ))}
      </View>
    </View>
  );
};

export default TutorialPager;
