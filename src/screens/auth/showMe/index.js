import SelectedCircle from '~assets/images/selectedCircle.png';
import EmptyCircle from '~assets/images/unselectedCircle.png';
import { Button, ScreenWrapper } from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import { updateUser } from '~redux/slices/authSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import { height } from '~utills/Dimension';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles';

export default function Showme({navigation, route}) {
  const [genders, setGenders] = useState(['Women', 'Men', 'Everyone']);
  const [selectedGender, setSelectedGender] = useState('Men');
  const [showGender, setShowGender] = useState(false);
  const dispatch = useDispatch()
  
  const HandleConfirmShowMe = () =>{
    dispatch(updateUser({
      showGenderInterestedOnProfile : showGender,
      genderInterestedIn: selectedGender
    }));
    navigation.navigate(ScreenNames.AppointmentPreferenceScreen, {
      fromSignIn: true,
    })
  }

  const renderGender = ({item}) => {
    const isSelected = item === selectedGender;
    return (
      <TouchableOpacity
        onPress={() => setSelectedGender(item)}
        activeOpacity={0.7}
        style={styles.genderContainer(isSelected)}>
        <Text style={styles.gendertext}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.bgWhite}>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.back}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text style={styles.title}>Show me</Text>
        <FlatList
          style={styles.genderList}
          data={genders}
          renderItem={renderGender}
          keyExtractor={item => item}
        />
        <Button
          onPress={()=>HandleConfirmShowMe()}
          title={'Continue'}
          containerStyle={{marginTop: height(10)}}
        />
      </View>
    </ScreenWrapper>
  );
}
