import React, {useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, ScreenWrapper} from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import {height} from '~utills/Dimension';
import styles from './styles';
import EmptyCircle from '~assets/images/unselectedCircle.png';
import SelectedCircle from '~assets/images/selectedCircle.png';
import AppColors from '~utills/AppColors';
import {useDispatch} from 'react-redux';
import {setBottomTabVisible} from '~redux/slices/configSlice';
export default function Profession({navigation, route}) {
  const isFirstTime = route?.params || false;
  const [genders, setGenders] = useState([
    'Architect',
    'Lawyer',
    'Marketing Assistant',
    'Others',
  ]);
  const [selectedGender, setSelectedGender] = useState('Men');
  const [professionText, setProfessionText] = useState('');
  const [showGender, setShowGender] = useState(false);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    isFirstTime && dispatch(setBottomTabVisible(false));
    return () => isFirstTime && dispatch(setBottomTabVisible(true));
  }, []);
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
        <Text style={styles.title}>My professional position It is</Text>
        <TextInput
          style={styles.phoneNumberInput}
          onChangeText={value => setProfessionText(value)}
          value={professionText}
          autoCapitalize={'none'}
          placeholder={''}
        />
        <FlatList
          style={styles.genderList}
          data={genders}
          renderItem={renderGender}
          keyExtractor={item => item}
        />
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowGender(prev => !prev)}>
            <Image
              source={showGender ? SelectedCircle : EmptyCircle}
              style={styles.img}
            />
          </TouchableOpacity>
          <Text style={styles.descr}>Show my position on my profile</Text>
        </View>
        <Button
          onPress={
            isFirstTime
              ? () => navigation.replace(ScreenNames.AgePreferenceScreen)
              : () => {}
          }
          title={'Continue'}
          containerStyle={{marginTop: height(10)}}
        />
      </View>
    </ScreenWrapper>
  );
}
