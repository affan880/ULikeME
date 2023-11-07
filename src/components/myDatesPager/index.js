import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import AppColors from '~utills/AppColors';
import styles from './styles';
import PagerView from 'react-native-pager-view';
import Avatar3 from '~assets/images/match3.png';
import MapIcon from '~assets/images/mapIcon.png';
import CabIcon from '~assets/images/cabIcon.png';
import CommonStyles from '~utills/CommonStyles';
import {height, width} from '~utills/Dimension';
import Button from '~components/button';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import SadSvg from '~components/sadSvg';

const MyDatesPager = ({
  dates = [],
  onPageChangeCallback = () => {},
  onPrimaryPress = () => {},
  onSecondaryPress = () => {},
  openDateFilter = () => {},
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const renderPagerItem = (item, index) => {
    return (
      <View key={`key-${index}`} style={styles.container}>
        <View style={styles.whiteBg}>
          <HeartLeftSvg style={styles.leftHeart} />
          <HeartRightSvg style={styles.rightHeart} />
          <Image source={Avatar3} style={styles.img} />
          <Text style={styles.title}>Your date will be on:</Text>
          <Text style={styles.time}>{item?.time}</Text>
          <Text style={styles.title}>The date will be at</Text>
          <Text style={styles.time}>{item?.place}</Text>
          <Text style={styles.title}>How to get there?</Text>
          <View style={styles.column}>
            <View style={styles.row}>
              <Image
                source={CabIcon}
                style={styles.icon}
                resizeMode={'contain'}
              />
              <Image
                source={MapIcon}
                style={[styles.icon, {marginLeft: width(2)}]}
                resizeMode={'contain'}
              />
            </View>
          </View>
          <Button
            onPress={onPrimaryPress}
            title={'Go to the message'}
            containerStyle={styles.mssgBtn}
          />
          <Button
            onPress={onSecondaryPress}
            type="secondary"
            title={'Establishment coupons'}
            containerStyle={styles.couponBtn}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      {dates.length > 0 ? (
        <PagerView
          style={styles.pager}
          initialPage={0}
          onPageSelected={state => {
            onPageChangeCallback(state.nativeEvent.position);
            setCurrentPage(state.nativeEvent.position);
          }}>
          {dates.map((item, index) => renderPagerItem(item, index))}
        </PagerView>
      ) : (
        <View style={styles.whiteBg}>
          <HeartLeftSvg style={styles.leftHeart} />
          <HeartRightSvg style={styles.rightHeart} />
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
            Oops, you don't have any activity yet, start now!
            </Text>
            <SadSvg style={{marginLeft: width(32)}} />
            <Button
              onPress={openDateFilter}
              title={'Others'}
              containerStyle={styles.emptyBtn}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default MyDatesPager;
