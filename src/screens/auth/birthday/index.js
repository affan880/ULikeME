import React, {useState} from 'react';
import moment from 'moment';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import {Button, ScreenWrapper} from '~components';
import ArrowDownSvg from '~components/arrowDownSvg';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import {height, width} from '~utills/Dimension';
import styles from './styles';
import { updateUser } from '~redux/slices/authSlice';

export default function Birthday({navigation, route}) {
  const [date, setDate] = useState('DD-MM-YYYY');
  const [pickerVisible, setPickerVisible] = useState(false);
  const dispatch = useDispatch();

  const handleConfirmMyBirthday = () =>{
    dispatch(updateUser({
      birthdayDate: date
    }));
    navigation.navigate(ScreenNames.GenderScreen);
  }
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.back}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text style={styles.title}>My birthday is</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setPickerVisible(true)}
            activeOpacity={0.7}
            style={styles.innerRow}>
            <Text style={styles.codeText}>{date}</Text>
            <ArrowDownSvg style={{marginLeft: width(2)}} />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>Your age will be public</Text>
        <Button
          onPress={()=> date !== 'DD-MM-YYYY' && handleConfirmMyBirthday() }
          title={'Continue'}
          containerStyle={{marginTop: height(10)}}
        />
      </View>
      <DateTimePickerModal
        isVisible={pickerVisible}
        mode="date"
        onConfirm={date => {
          setDate(moment(date).format('DD-MM-YYYY'));
          setPickerVisible(false);
        }}
        onCancel={() => setPickerVisible(false)}
      />
    </ScreenWrapper>
  );
}
