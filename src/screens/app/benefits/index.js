import { ScreenWrapper } from '~components';
import { SimpleHeader } from '~components/Header';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import { setBottomTabVisible } from '~redux/slices/configSlice';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import { height } from '~utills/Dimension';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import styles from './styles';

const benefitsArray = [
  {id: '1', title: 'Get 5 points', gradientText: 'See announcement'},
  {id: '2', title: 'Get 10 Ulikme', gradientText: 'View 3 listings'},
  {id: '3', title: 'Get 5 points', gradientText: 'See announcement'},
  {id: '4', title: 'Get 10 Ulikme', gradientText: 'View 3 listings'},
  {id: '5', title: 'Get 5 points', gradientText: 'See announcement'},
  {id: '6', title: 'Get 10 Ulikme', gradientText: 'View 3 listings'},
  {id: '7', title: 'Get 5 points', gradientText: 'See announcement'},
  {id: '8', title: 'Get 10 Ulikme', gradientText: 'View 3 listings'},
  {id: '9', title: 'Get 5 points', gradientText: 'See announcement'},
  {id: '10', title: 'Get 10 Ulikme', gradientText: 'View 3 listings'},
];
export default function Benefits({navigation, route}) {
  const [benefits, setBenefits] = useState(benefitsArray);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(setBottomTabVisible(false));
    return () => dispatch(setBottomTabVisible(true));
  }, []);
  const renderBenefit = ({item, index}) => (
    <View style={styles.benefitContainer}>
      <Text style={styles.benefitTitle}>{item?.title}</Text>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FF56FF', '#D776FF', '#6D90FE', '#59B6FE', '#38F2FF']}
        style={styles.gradient}>
        <Text style={styles.gradientText}>{item?.gradientText}</Text>
      </LinearGradient>
    </View>
  );
  return (
    <ScreenWrapper
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}
      headerUnScrollable={() => (
        <SimpleHeader navigation={navigation} title={'Benifits'} />
      )}>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.bottomHeart} />
        <Text style={styles.title}>
          Watch as many videos as possible and you will earn a lot of points and actions Free within the app
        </Text>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={benefits}
          renderItem={renderBenefit}
          keyExtractor={item => item.id}
          style={CommonStyles.marginTop_1}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
}
