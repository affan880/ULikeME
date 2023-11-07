import MeetImage from '~assets/images/meetImage.png';
import Heart from '~assets/images/smallHeart.png';
import AreaPickerModal from '~components/areaPickerModal';
import BackArrowSvg from '~components/backArrowSvg';
import Button from '~components/button';
import ChevronDownSvg from '~components/chevronDownSvg';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import moment from 'moment';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import styles from './styles';

const TIME_INITIAL = 'Select Date & Time';
const PLACE_INITIAL = 'Choosing the area';
const MeetChatView = ({onAcceptMeetPress, meetData}) => {
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [areaPickerVisible, setAreaPickerVisible] = useState(false);
  const [time, setTime] = useState(TIME_INITIAL);
  const [place, setPlace] = useState(PLACE_INITIAL);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.greyText}>Selected option</Text>
        <Image source={Heart} resizeMode={'contain'} style={styles.img} />
        <Text style={styles.greyText}>Ready to meet</Text>
      </View>
      <View style={styles.whiteBg}>
        <Text style={styles.title}>
          They are ready to meet, select your available options!
        </Text>
        <View style={styles.meetRow}>
          <Image source={MeetImage} style={styles.meetImg} />
          <View style={styles.rowRight}>
            <View style={[styles.dropDown, CommonStyles.marginTop_1]}>
              <View>
                <Text style={styles.label}>Your appointment will be on:</Text>
                <Text style={styles.value}>{time}</Text>
              </View>
              <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
                <ChevronDownSvg style={styles.arrowDown} />
              </TouchableOpacity>
            </View>
            <View style={[styles.dropDown, CommonStyles.marginTop_3]}>
              <View>
                <Text style={styles.label}>The appointment will be at</Text>
                <Text style={styles.value}>{place}</Text>
              </View>
              <TouchableOpacity onPress={() => setAreaPickerVisible(true)}>
                <ChevronDownSvg style={styles.arrowDown} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {time !== TIME_INITIAL &&
          place !== PLACE_INITIAL &&
          !meetData?.proposal && (
            <Button
              onPress={() => onAcceptMeetPress()}
              title={'Submit Proposal'}
              containerStyle={styles.btn}
            />
          )}
      </View>
      {meetData?.proposal && (
        <>
          <Text style={[styles.greyText, CommonStyles.marginTop_2]}>
            {meetData?.proposal?.by} sent you a counter-proposal
          </Text>
          <View style={styles.whiteBg}>
            <Text style={styles.title}>Here's the plan!</Text>
            <View style={styles.meetRow}>
              <Image source={MeetImage} style={styles.meetImg} />
              <View style={styles.rowRight}>
                <View style={[styles.dropDown, CommonStyles.marginTop_1]}>
                  <View>
                    <Text style={styles.label}>Your appointment will be on:</Text>
                    <Text style={styles.value}>{meetData?.proposal?.time}</Text>
                  </View>
                  <ChevronDownSvg style={styles.arrowDown} />
                </View>
                <View style={[styles.dropDown, CommonStyles.marginTop_3]}>
                  <View>
                    <Text style={styles.label}>The appointment will be at</Text>
                    <Text style={styles.value}>
                      {meetData?.proposal?.place}
                    </Text>
                  </View>
                  <ChevronDownSvg style={styles.arrowDown} />
                </View>
              </View>
            </View>
            {time !== TIME_INITIAL &&
              place !== PLACE_INITIAL &&
              !meetData?.proposal && (
                <Button
                  onPress={() => onAcceptMeetPress()}
                  title={'Submit Proposal'}
                  containerStyle={styles.btn}
                />
              )}
          </View>
        </>
      )}
      <AreaPickerModal
        isVisible={areaPickerVisible}
        close={() => setAreaPickerVisible(false)}
        setPlace={setPlace}
        place={place}
      />
      <DateTimePickerModal
        isVisible={timePickerVisible}
        mode="datetime"
        onConfirm={date => {
          setTime(moment(date).format('DD/MM/YYYY - ha'));
          setTimePickerVisible(false);
        }}
        onCancel={() => setTimePickerVisible(false)}
      />
    </View>
  );
};

export default MeetChatView;
