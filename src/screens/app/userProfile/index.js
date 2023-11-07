import HeaderLogo from '~assets/images/appLogo2.png';
import Briefcase from '~assets/images/briefcaseIcon.png';
import DislikeIcon from '~assets/images/dislike.png';
import GirlPreview from '~assets/images/girlPreview.png';
import HeartIcon from '~assets/images/heart.png';
import CenterHeart from '~assets/images/heartSilver.png';
import Insta1 from '~assets/images/insta1.png';
import Insta2 from '~assets/images/insta2.png';
import Insta3 from '~assets/images/insta3.png';
import Insta4 from '~assets/images/insta4.png';
import Insta5 from '~assets/images/insta5.png';
import InstaIcon from '~assets/images/instaIcon.png';
import LikeIcon from '~assets/images/like.png';
import Location from '~assets/images/locationIcon.png';
import MusicThumb from '~assets/images/musicThumbnail.png';
import Profile from '~assets/images/profileIcondark.png';
import Spotify from '~assets/images/spotify.png';
import { getUserCompleteProfile, getUserProfile } from '~backend/firebase';
import { CrossSvg, MenuDotsSvg, MusicCard, ScreenWrapper, TutorialPager, UserProfileModal } from '~components';
import EmotionButtons from '~components/emotionButtons';
import { setBottomTabVisible } from '~redux/slices/configSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import { height } from '~utills/Dimension';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
import { useDispatch } from 'react-redux';

import styles from './styles';

const previewImagesArray = [
  {
    id: '1',
    image: GirlPreview,
    title: 'Lorem Ipsum 25',
    interests: ['Interest S', 'Interest XL'],
    sexualPreference: 'Here is the information about sexual pref',
    profession: 'Here will be the professional position information',
    distance: '5km away',
    description: `Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. 

Stet clita kasd gubergren, don't be takimata sanctus est Lorem ipsum pain sit amet. Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. Stet clita`,
    music: [
      {
        id: '1',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '2',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '3',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '4',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '5',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
    ],
    instagramProfiles: [
      {id: '1', image: InstaIcon, avatar: Insta1},
      {id: '2', image: InstaIcon, avatar: Insta2},
      {id: '3', image: InstaIcon, avatar: Insta3},
      {id: '4', image: InstaIcon, avatar: Insta4},
      {id: '5', image: InstaIcon, avatar: Insta5},
    ],
  },
  {
    id: '2',
    image: GirlPreview,
    title: 'Lorem Ipsum 30',

    interests: ['Interest S', 'Interest XL'],
    sexualPreference: 'Here is the information about sexual pref',
    profession: 'Here will be the professional position information',
    distance: '5km away',
    description: `Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. 

Stet clita kasd gubergren, don't be takimata sanctus est Lorem ipsum pain sit amet. Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. Stet clita`,
    music: [
      {
        id: '1',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '2',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '3',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '4',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '5',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
    ],
    instagramProfiles: [
      {id: '1', image: InstaIcon, avatar: Insta1},
      {id: '2', image: InstaIcon, avatar: Insta2},
      {id: '3', image: InstaIcon, avatar: Insta3},
      {id: '4', image: InstaIcon, avatar: Insta4},
      {id: '5', image: InstaIcon, avatar: Insta5},
    ],
  },
  {
    id: '3',
    title: 'Lorem Ipsum 35',
    image: GirlPreview,
    interests: ['Interest S', 'Interest XL'],
    sexualPreference: 'Here is the information about sexual pref',
    profession: 'Here will be the professional position information',
    distance: '5km away',
    description: `Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. 

Stet clita kasd gubergren, don't be takimata sanctus est Lorem ipsum pain sit amet. Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. Stet clita`,
    music: [
      {
        id: '1',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '2',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '3',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '4',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
      {
        id: '5',
        title: 'Título de la canción',
        subtitle: 'Nombre del grupo',
        album: MusicThumb,
      },
    ],
    instagramProfiles: [
      {id: '1', image: InstaIcon, avatar: Insta1},
      {id: '2', image: InstaIcon, avatar: Insta2},
      {id: '3', image: InstaIcon, avatar: Insta3},
      {id: '4', image: InstaIcon, avatar: Insta4},
      {id: '5', image: InstaIcon, avatar: Insta5},
    ],
  },
];

export default function UserProfile({navigation, route}) {
  const {id, photo } = route?.params?.user
  const [currentPage, setCurrentPage] = useState(0);
  const [previewImages, setPreviewImages] = useState(previewImagesArray);
  const [showFull, setShowFull] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(setBottomTabVisible(false));
    return () => dispatch(setBottomTabVisible(true));
  }, []);
  useEffect(() => {
    getUserCompleteProfile(id).then((res)=>{
      const obj=  {
        id: '1',
        image: photo,
        title: 'Lorem Ipsum 25',
        interests: ['Interest S', 'Interest XL'],
        sexualPreference: 'Here is the information about her',
        profession: 'Here will be the professional position information',
        distance: '5km away',
        description: `Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. 
    
    Stet clita kasd gubergren, don't be takimata sanctus est Lorem ipsum pain sit amet. Lorem ipsum pain sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo Dolores et ea rebum. Stet clita`,
        music: [
          {
            id: '1',
            title: 'Hueeueue',
            subtitle: 'Test',
            album: MusicThumb,
          },
          {
            id: '2',
            title: 'Hue Hue',
            subtitle: 'Test',
            album: MusicThumb,
          },
          {
            id: '3',
            title: 'Hue Hue',
            subtitle: 'TTest',
            album: MusicThumb,
          },
        ],
        instagramProfiles: [
          {id: '1', image: InstaIcon, avatar: Insta1},
          {id: '2', image: InstaIcon, avatar: Insta2},
          {id: '3', image: InstaIcon, avatar: Insta3},
          {id: '4', image: InstaIcon, avatar: Insta4},
          {id: '5', image: InstaIcon, avatar: Insta5},
        ],
      }
      setPreviewImages([obj])
    })
  }, [])
  const renderInterest = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => (index == 0 ? setShowFull(false) : setShowFull(true))}
        style={styles.interestContainer}>
        <Text style={styles.interestext}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const Br = useCallback(
    ({invisible}) => (
      <View
        style={[
          styles.break,
          {backgroundColor: invisible ? AppColors.transparent : AppColors.grey},
        ]}
      />
    ),
    [],
  );
  const renderMusicCard = ({item, index}) => {
    return <MusicCard musicData={item} />;
  };
  const renderInstagramCard = ({item, index}) => {
    return (
      <View>
        <Image
          source={{
            uri: photo
          }}
          style={styles.instaAvatar}
          resizeMode={'cover'}
        />
        <Image source={item?.image} style={styles.instaIcon} />
      </View>
    );
  };
  const renderEmotions = useCallback(() => {
    return (
      <View style={styles.emotionRow}>
        <TouchableOpacity activeOpacity={0.7} style={styles.emotionItem}>
          <Image
            source={DislikeIcon}
            style={styles.emotionIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.emotionItem}>
          <Image
            source={HeartIcon}
            style={styles.emotionIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.emotionItem}>
          <Image
            source={LikeIcon}
            style={styles.emotionIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    );
  }, []);
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}>
      <View style={styles.mainViewContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.cross}>
          <CrossSvg stroke={AppColors.white} />
        </TouchableOpacity>
        <PagerView
          style={styles.pager}
          initialPage={0}
          onPageSelected={state => {
            setCurrentPage(state.nativeEvent.position);
          }}>
          {previewImages.map((item, index) => (
            <View key={`key-${item?.id}`} style={styles.imageContainer}>
              <Image source={{
                uri: photo
              }} style={styles.pagerImage} />
            </View>
          ))}
        </PagerView>
        <View style={styles.pageDotsContainer}>
          {previewImages.map((item, index) => (
            <View
              key={`key-${index}`}
              style={styles.dots(index === currentPage)}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => setShowProfileMenu(true)}
          activeOpacity={0.95}
          style={styles.menuBtnPress}>
          <LinearGradient
            colors={['#8D55FE', '#582FC0', '#321394']}
            style={styles.menuButton}>
            <MenuDotsSvg />
          </LinearGradient>
        </TouchableOpacity>
        <FlatList
          horizontal
          style={styles.interestList}
          contentContainerStyle={styles.interestListContent}
          data={previewImages[currentPage]?.interests}
          renderItem={renderInterest}
          keyExtractor={item => item}
        />
        <View style={styles.padding}>
          <Text style={styles.title}>{previewImages[currentPage]?.title}</Text>
          <View style={[styles.row, CommonStyles.marginTop_1]}>
            <Image
              source={Briefcase}
              resizeMode={'contain'}
              style={styles.icon}
            />
            <Text style={[styles.descr, CommonStyles.marginLeft_3]}>
              {previewImages[currentPage]?.profession}
            </Text>
          </View>
          <View style={[styles.row, CommonStyles.marginTop_1]}>
            <Image
              source={Profile}
              resizeMode={'contain'}
              style={styles.icon}
            />
            <Text style={[styles.descr, CommonStyles.marginLeft_3]}>
              {previewImages[currentPage]?.sexualPreference}
            </Text>
          </View>
          <View style={[styles.row, CommonStyles.marginTop_1]}>
            <Image
              source={Location}
              resizeMode={'contain'}
              style={styles.icon}
            />
            <Text style={[styles.descr, CommonStyles.marginLeft_3]}>
              {previewImages[currentPage]?.distance}
            </Text>
          </View>
        </View>
        {showFull && (
          <>
            <Br />
            <View style={styles.padding}>
              <Text style={styles.previewDescr}>
                {previewImages[0]?.description}
              </Text>
            </View>
            <Br />
            <View style={styles.padding}>
              <Text style={styles.subtitle}>My music</Text>
            </View>
            <FlatList
              horizontal
              style={styles.musicList}
              contentContainerStyle={styles.musicListContent}
              data={previewImages[currentPage]?.music}
              renderItem={renderMusicCard}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
            <Br />
            <View style={styles.padding}>
              <Text style={styles.subtitle}>Instagram</Text>
            </View>
            <FlatList
              horizontal
              style={styles.instaList}
              contentContainerStyle={styles.instaListContent}
              data={previewImages[currentPage]?.instagramProfiles}
              renderItem={renderInstagramCard}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </>
        )}
        {renderEmotions()}
        <Br invisible />
      </View>
      <UserProfileModal
        isVisible={showProfileMenu}
        onClose={() => setShowProfileMenu(false)}
      />
    </ScreenWrapper>
  );
}
