import Briefcase from '~assets/images/briefcaseIcon.png';
import GirlPreview from '~assets/images/girlPreview.png';
import Insta1 from '~assets/images/insta1.png';
import Insta2 from '~assets/images/insta2.png';
import Insta3 from '~assets/images/insta3.png';
import Insta4 from '~assets/images/insta4.png';
import Insta5 from '~assets/images/insta5.png';
import Instagram from '~assets/images/instagram.png';
import InstaIcon from '~assets/images/instaIcon.png';
import Location from '~assets/images/locationIcon.png';
import MusicThumb from '~assets/images/musicThumbnail.png';
import Profile from '~assets/images/profileIcondark.png';
import Spotify from '~assets/images/spotify.png';
import { Br, GalleryModal, MenuDotsSvg, MusicCard, ScreenWrapper, Select, SmallPlusSvg } from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import { SimpleHeader } from '~components/Header';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import { setBottomTabVisible } from '~redux/slices/configSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import { height, width } from '~utills/Dimension';
import React, { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  },
  {
    id: '2',
    image: GirlPreview,
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
  },
  {
    id: '3',
    image: GirlPreview,
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
  },
];

export default function EditProfile({navigation, route}) {
  const [isEdit, setIsEdit] = useState(true);
  const [aboutMe, setAboutMe] = useState('');
  const [workCompany, setWorkCompany] = useState('');
  const [whereILive, setWhereILive] = useState('');
  const [interests, setInterests] = useState('');
  const [profesion, setProfession] = useState('');
  const [gender, setGender] = useState('');
  const [orientation, setOrientation] = useState('');
  const [appintmentPreference, setAppintmentPreference] = useState('');
  const [galleryModalVisible, setGalleryModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [previewImages, setPreviewImages] = useState(previewImagesArray);
  const [photos, setPhotos] = useState([
    {id: '1', uri: null},
    {id: '2', uri: null},
    {id: '3', uri: null},
    {id: '4', uri: null},
  ]);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(setBottomTabVisible(false));
    return () => dispatch(setBottomTabVisible(true));
  }, []);
  const renderTab = useCallback(() => {
    return (
      <View style={styles.tabRow(isEdit)}>
        <TouchableOpacity onPress={() => setIsEdit(true)} activeOpacity={0.7}>
          <Text style={styles.tabText(!isEdit, isEdit)}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsEdit(false)} activeOpacity={0.7}>
          <Text style={styles.tabText(isEdit, isEdit)}>Preview</Text>
        </TouchableOpacity>
      </View>
    );
  }, [isEdit]);

  // // Line break
  // const Br = useCallback(
  //   ({invisible}) => (
  //     <View
  //       style={[
  //         styles.break,
  //         {backgroundColor: invisible ? AppColors.transparent : AppColors.grey},
  //       ]}
  //     />
  //   ),
  //   [],
  // );

  // Shown when in edit mode
  const renderEdit = useCallback(() => {
    return (
      <View style={styles.editContainer}>
        <Text style={styles.subtitle}>Add at least 2 photos</Text>
        <Text style={styles.descr}>
          Add or delete photos from your gallery or camera
        </Text>
        <View style={styles.photos}>
          {photos.map((photo, index) => (
            <View key={`key-${index}`} style={styles.photoContainer}>
              <TouchableOpacity
                onPress={() => setGalleryModalVisible(photo?.id)}
                activeOpacity={0.7}
                style={styles.plus}>
                <SmallPlusSvg />
              </TouchableOpacity>
              <Image source={{uri: photo?.uri}} style={styles.photo} />
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>About me</Text>
          <Text style={styles.descr}>Please enter up to 500 characters</Text>
          <TextInput
            multiline
            style={[styles.aboutMeInput, {marginTop: height(1)}]}
            value={aboutMe}
            onChangeText={text => setAboutMe(text)}
            numberOfLines={7}
          />
        </View>
        <Br />
        <Select
          label={'Interests'}
          defaultValue={'Select at least 3 interests to share'}
          value={interests}
          onPress={() => navigation.navigate(ScreenNames.InterestsScreen)}
        />
        <Br />
        <Select
          label={'Professional Position'}
          onPress={() => navigation.navigate(ScreenNames.ProfesionScreen)}
          defaultValue={'Select a position'}
          value={profesion}
        />
        <Br />
        <View style={styles.section}>
          <Text style={styles.subtitle}>Work company</Text>
          <TextInput
            multiline
            style={styles.aboutMeInput}
            value={workCompany}
            onChangeText={text => setWorkCompany(text)}
            numberOfLines={7}
          />
        </View>
        <Br />
        <View style={styles.section}>
          <Text style={styles.subtitle}>Where do I live</Text>
          <TextInput
            multiline
            style={styles.aboutMeInput}
            value={whereILive}
            onChangeText={text => setWhereILive(text)}
            numberOfLines={7}
          />
        </View>
        <Br />
        <View style={styles.connectContainer}>
          <Image
            source={Instagram}
            resizeMode={'contain'}
            style={styles.socialIcon}
          />
          <Text style={styles.connectText}>Connect to Instagram</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.subtitle}>CONNECT</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.connectContainer, CommonStyles.marginTop_2]}>
          <Image
            source={Spotify}
            resizeMode={'contain'}
            style={styles.socialIcon}
          />
          <Text style={styles.connectText}>Connect to Spotify</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.subtitle}>CONNECT</Text>
          </TouchableOpacity>
        </View>
        <Br />
        <Select
          onPress={() => navigation.navigate(ScreenNames.GenderScreen)}
          label={`I'm`}
          defaultValue={'Woman'}
          value={gender}
        />
        <Br />
        <Select
          onPress={() =>
            navigation.navigate(ScreenNames.SexualOrientationScreen)
          }
          label={`Sexual orientation`}
          defaultValue={'Lesbian, Heterosexual and Gay.'}
          value={orientation}
        />
        <Br />
        <Select
          onPress={() =>
            navigation.navigate(ScreenNames.AppointmentPreferenceScreen)
          }
          label={`Preferencias de cita`}
          defaultValue={''}
          value={appintmentPreference}
        />
        <Br />
      </View>
    );
  }, [
    photos,
    aboutMe,
    workCompany,
    whereILive,
    interests,
    profesion,
    gender,
    orientation,
    appintmentPreference,
  ]);
  const renderPreview = useCallback(() => {
    const renderInterest = ({item, index}) => {
      return (
        <View style={styles.interestContainer}>
          <Text style={styles.interestext}>{item}</Text>
        </View>
      );
    };

    const renderMusicCard = ({item, index}) => {
      return <MusicCard musicData={item} />;
    };
    const renderInstagramCard = ({item, index}) => {
      return (
        <View>
          <Image
            source={item?.avatar}
            style={styles.instaAvatar}
            resizeMode={'cover'}
          />
          <Image source={item?.image} style={styles.instaIcon} />
        </View>
      );
    };
    return (
      <View>
        <PagerView
          style={styles.pager}
          initialPage={0}
          onPageSelected={state => {
            setCurrentPage(state.nativeEvent.position);
          }}>
          {previewImages.map((item, index) => (
            <View key={`key-${item?.id}`} style={styles.imageContainer}>
              <Image source={item?.image} style={styles.pagerImage} />
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
        <TouchableOpacity activeOpacity={0.95} style={styles.menuBtnPress}>
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
        <Br invisible />
      </View>
    );
  }, [previewImages, currentPage]);

  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={isEdit ? AppColors.bgWhite : AppColors.purple}
      backgroundColor={AppColors.bgWhite}
      headerUnScrollable={() => (
        <>
          <SimpleHeader
            flipColors={!isEdit}
            navigation={navigation}
            title={'Edit profile'}
            rightIcon={isEdit ? <Text style={styles.OK}>OK</Text> : null}
          />
          {renderTab()}
        </>
      )}>
      <View style={styles.mainViewContainer}>
        {isEdit && <HeartLeftSvg style={styles.leftHeart} />}
        {isEdit && <HeartRightSvg style={styles.bottomHeart} />}
        {isEdit ? renderEdit() : renderPreview()}
      </View>
      <GalleryModal
        isVisible={!!galleryModalVisible}
        onImageSelect={uri => {
          if (uri) {
            const tmp = [...photos];
            const index = tmp.findIndex(
              item => item.id === galleryModalVisible,
            );
            tmp[index].uri = uri;
            setPhotos(tmp);
          }
          setGalleryModalVisible(false);
        }}
        onClose={() => setGalleryModalVisible(false)}
      />
    </ScreenWrapper>
  );
}
