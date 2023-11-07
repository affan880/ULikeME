import React, {useState} from 'react';
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
import { useDispatch } from 'react-redux';
import { updateUser } from '~redux/slices/authSlice';
export default function AppointmentPreference({navigation, route}) {
  const fromSignIn = route?.params?.fromSignIn || false;
  const [genders, setGenders] = useState([
    'Group dating',
    'Individual appointments',
    'Both',
  ]);
  const [selectedGender, setSelectedGender] = useState('Men');
  const [professionText, setProfessionText] = useState('');
  const [showGender, setShowGender] = useState(false);
  const dispatch = useDispatch();

  const handleConfirmAppointment = () => {
    dispatch(updateUser({
      genderPreference : selectedGender,
      showGenderPreference: showGender
    }));
    navigation.navigate(ScreenNames.InterestsScreen, {
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
        <Text style={styles.title}>I like</Text>
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
          onPress={()=>{
            fromSignIn
            ? 
            handleConfirmAppointment()
            : () => {}
          }}
          title={fromSignIn ? 'Continue' : 'Save'}
          containerStyle={{marginTop: height(10)}}
        />
      </View>
    </ScreenWrapper>
  );
}
