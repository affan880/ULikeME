import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button, ScreenWrapper} from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import {height} from '~utills/Dimension';
import styles from './styles';

export default function NameEdit({navigation, route}) {
  const [name, setName] = useState('');

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
        <Text style={styles.title}>My username</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.phoneNumberInput}
            onChangeText={value => setName(value)}
            value={name}
            autoCapitalize={'none'}
            placeholder={'Enter your alias here'}
          />
        </View>
        <Text style={styles.description}>
          So you'll appear on Ulikme and you won't be able to change it
        </Text>
        <Button
          disabled={name.length < 3}
          // onPress={onContinuePress}
          title={'Save'}
          containerStyle={{marginTop: height(15)}}
        />
      </View>
    </ScreenWrapper>
  );
}
