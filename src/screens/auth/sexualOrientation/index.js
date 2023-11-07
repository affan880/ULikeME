import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Button, ScreenWrapper} from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import {height} from '~utills/Dimension';
import styles from './styles';
import EmptyCircle from '~assets/images/unselectedCircle.png';
import SelectedCircle from '~assets/images/selectedCircle.png';
import {showMessage} from 'react-native-flash-message';
import AppColors from '~utills/AppColors';
import { useDispatch } from 'react-redux';
import { updateUser } from '~redux/slices/authSlice';
export default function SexualOrientation({navigation, route}) {
  const dispatch = useDispatch()
  const [orientations, setOrientations] = useState([
    'Heterosexual',
    'Gay',
    'Lesbian',
    'Bisexual',
    'Asexual',
    'Demisexual',
    'Pansexual',
    'Queer',
    'I have doubts',
  ]);
  const [selectedOrientation, setSelectedOrientation] =
    useState('Heterosexual');
  const [showGender, setShowGender] = useState(false);

  const handleConfirmSexualOrientation = () => {
    dispatch(updateUser({
      showSexualOrientationOnProfile : showGender,
      selectedOrientation: selectedOrientation
    }));
    navigation.navigate(ScreenNames.ShowmeScreen);
  }

  const renderOrientation = ({item}) => {
    const isSelected = item === selectedOrientation;
    return (
      <TouchableOpacity
        onPress={() => setSelectedOrientation(item)}
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
        <Text style={styles.title}>My sexual orientation is</Text>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.genderList}
            data={orientations}
            renderItem={renderOrientation}
            keyExtractor={item => item}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowGender(prev => !prev)}>
            <Image
              source={showGender ? SelectedCircle : EmptyCircle}
              style={styles.img}
            />
          </TouchableOpacity>
          <Text style={styles.descr}>
            Show my sexual orientation on my profile
          </Text>
        </View>
        <Button
          onPress={
            () => handleConfirmSexualOrientation()
          }
          title={'Continue'}
          containerStyle={{marginTop: height(3)}}
        />
      </View>
    </ScreenWrapper>
  );
}
