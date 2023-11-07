import { createUserDocument, getCurrentUser, getUserAdditionalInfo, uploadFilesToStorage } from '~backend/firebase';
import { Button, GalleryModal, ScreenWrapper, SmallPlusSvg } from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import { login, updateUser } from '~redux/slices/authSlice';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import { getInterestedIn } from '~utills/Constants';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

export default function AddPhotos({navigation, route}) {
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([
    {id: '1', uri: null},
    {id: '2', uri: null},
    {id: '3', uri: null},
    {id: '4', uri: null},
  ]);
  const [interested, setInterested] = useState({})

  const userFilledInfo = useSelector(state => {return state.Auth.currentUserInfo});
  console.log('file',userFilledInfo)

  const handleConfirmPhotos = () => {
    const user = getCurrentUser();
    const interestedIn = getInterestedIn(userFilledInfo?.gender, userFilledInfo?.selectedOrientation);
  
    uploadFilesToStorage(photos)
      .then((res) => {
        dispatch(updateUser({
          photos: res,
          interestedIn: interestedIn,
        }));
        setPhotos(res);
        createUserDocument({
          ...userFilledInfo,
          photos: res,
          interestedIn: interestedIn,
          createdOn: new Date(),
          likedProfiles:[],
          dislikedProfiles:[],
          matches: [],
          uLikeMe: [],
          myDates:[],
          ilikeIt:[],
        });
        getUserAdditionalInfo()
          .then((userAdditionalInfo) => {
            dispatch(login({user, userAdditionalInfo}))
          })
          .catch((error) => {
            console.log('Error fetching user additional info:', error);
          });
      })
      .catch((err) => {
        console.log(err);
      })
  };
  
  

  const [galleryModalVisible, setGalleryModalVisible] = useState(false);
  const onImageSelect = uri => {
    if (uri) {
      const tmp = [...photos];
      const index = tmp.findIndex(item => item.id === galleryModalVisible);
      tmp[index].uri = uri;
      setPhotos(tmp);
    }
    setGalleryModalVisible(false);
  };
  return (
    <ScreenWrapper
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}
      headerUnScrollable={() => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <BackArrowSvg />
        </TouchableOpacity>
      )}>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} />
        <Text style={styles.title}>Add Photos</Text>
        <Text style={styles.subtitle}>Add a minimum of 2 photos</Text>
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
        <Button
          onPress={handleConfirmPhotos}
          title={'Continue'}
          containerStyle={styles.btn}
        />
      </View>
      <GalleryModal
        isVisible={!!galleryModalVisible}
        onImageSelect={onImageSelect}
        onClose={() => setGalleryModalVisible(false)}
      />
    </ScreenWrapper>
  );
}
