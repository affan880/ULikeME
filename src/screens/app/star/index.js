import Avatar1 from '~assets/images/match3.png';
import Avatar2 from '~assets/images/match4.png';
import Avatar3 from '~assets/images/match5.png';
import Avatar4 from '~assets/images/match6.png';
import { getUserCompleteProfile, getUserProfile } from '~backend/firebase';
import { Button, CalendarSvg, Header, MyDatesPager, SadSvg, ScreenWrapper, UserEvent } from '~components';
import AreaPickerModal from '~components/areaPickerModal';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import { selectUser } from '~redux/slices/authSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import { width } from '~utills/Dimension';
import { UserEventType } from '~utills/Enums';
import React, { useEffect, useState } from 'react';
import { FlatList, LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

const filtersArray = [
  {title: 'All', type: null},
  {title: 'I like it', type: UserEventType.LIKE},
  {title: 'My dates', type: UserEventType.DATE},
  {title: 'Matches', type: UserEventType.MATCH},
  {title: 'Ulikeme', type: UserEventType.ULIKEME},
];
const datesArray = [
  {
    id: '1',
    name: 'User 3',
    subtitle: 'Test',
    time: '14/12/2021',
    place: 'Heaven',
    type: UserEventType.DATE,
    image: Avatar3,
  },
  {
    id: '2',
    name: 'User 3',
    subtitle: 'Test',
    time: '14/12/2021',
    place: 'Hell',
    type: UserEventType.DATE,
    image: Avatar3,
  },
  {
    id: '3',
    name: 'User 3',
    subtitle: 'Cita 05/07/2021',
    time: '14/12/2021',
    place: 'IDK',
    type: UserEventType.DATE,
    image: Avatar3,
  },
];
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const PLACE_INITIAL = 'Choose an area';

export default function Star({navigation, route}) {
  const [isMyDates, setIsMyDates] = useState(false); // this boolean state detects if tab is on My dates and changes whole screen ui
  const [selectedFilter, setSelectedFilter] = useState({
    title: 'All',
    type: null,
  });
  const userData = useSelector(selectUser)
  const [filters, setFilters] = useState(filtersArray);
  const [userEvents, setUserEvents] = useState([]);
  const [myDates, setMyDates] = useState(datesArray);
  const [dateFilter, setDateFilter] = useState('Hoy');
  const [pagerPage, setPagerPage] = useState(0);
  const [datFilterPicker, setDateFilterPicker] = useState(false);
  const [area, setArea] = useState(PLACE_INITIAL);
  const [userPublicData, setUserPublicData] =  useState([])
  useEffect(() => {
    if (
      selectedFilter?.title !== 'All' &&
      selectedFilter?.title !== 'My dates'
    ) {
      setIsMyDates(false);
      const tmp = userPublicData.filter(
        item => item.type === selectedFilter.type,
      );
      setUserEvents(tmp);
    } else if (selectedFilter?.title === 'My dates') {
      setIsMyDates(true);
    } else if (selectedFilter?.title === 'All') {
      setIsMyDates(false);
      setUserEvents(userPublicData);
    }
  }, [selectedFilter]);

  const handleGetPublicInfo = () => {
    setUserEvents([]);
    setUserPublicData([])
    const info = [];
    getUserCompleteProfile(userData.uid).then((res)=>{
      res?.uLikeMe.map((getId)=>{
        getUserProfile(getId).then((res2)=>{
          info.push({
            id: res2.id,
            name: res2?.name,
            subtitle: 'Ulikeme',
            type: UserEventType.ULIKEME,
            image: {
              uri: res2?.photo
            },
          })
          setUserEvents(info)
          setUserPublicData(info)
        })
      })
      res?.matches.map((getId)=>{
        getUserProfile(getId).then((res2)=>{
          info.push({
            id: res2.id,
            name: res2?.name,
            subtitle: 'Match',
            type: UserEventType.MATCH,
            image: {
              uri: res2?.photo
            },
          })
          setUserEvents(info)
          setUserPublicData(info)
        })
      })
      res?.ilikeIt.map((getId)=>{
        getUserProfile(getId).then((res2)=>{
          info.push({
            id: res2.id,
            name: res2?.name,
            subtitle: 'Like',
            type: UserEventType.LIKE,
            image: {
              uri: res2?.photo
            },
          })
          setUserEvents(info)
          setUserPublicData(info)
        })
      })
    })
  }

  useEffect(()=>{
    handleGetPublicInfo()
  },[])

  const renderfilter = ({item, index}) => {
    const isSelected = selectedFilter.title === item?.title;
    return (
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
          setSelectedFilter(item);
        }}
        activeOpacity={0.7}
        style={styles.tabItem}>
        <Text style={styles.sectionTitle2(isMyDates)}>{item.title}</Text>
        <View
          style={
            isSelected
              ? styles.bottomLine(isMyDates)
              : styles.invisible(isMyDates)
          }
        />
      </TouchableOpacity>
    );
  };
  const renderUserEvent = ({item, index}) => <UserEvent data={item} />;
  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>
      "Oops, you don't have any activity yet, start now!"
      </Text>
      <SadSvg />
      <Button
        onPress={() => navigation.navigate(ScreenNames.ChatStack)}
        title={'Others'}
        containerStyle={styles.emptyBtn}
      />
    </View>
  );

  return (
    <ScreenWrapper
      statusBarColor={isMyDates ? AppColors.purple : AppColors.white}
      backgroundColor={isMyDates ? AppColors.purple : AppColors.white}
      headerUnScrollable={() => (
        <Header
          backgroundColor={isMyDates ? AppColors.purple : AppColors.white}
          logoType={isMyDates ? 2 : 1}
        />
      )}>
      <View style={styles.mainViewContainer}>
        {!isMyDates && <HeartLeftSvg style={styles.leftHeart} />}
        {!isMyDates && <HeartRightSvg style={styles.rightHeart} />}
        <FlatList
          horizontal
          style={{flexGrow: 0}}
          contentContainerStyle={styles.listContent}
          data={filters}
          renderItem={renderfilter}
          keyExtractor={item => item.title}
          showsHorizontalScrollIndicator={false}
        />
        {!isMyDates && (
          <TouchableOpacity activeOpacity={0.7} style={styles.deleteBtn}>
            <Text style={styles.sectionTitle2(isMyDates)}>Delete All</Text>
          </TouchableOpacity>
        )}
        {!isMyDates && (
          <FlatList
            data={userEvents}
            renderItem={renderUserEvent}
            contentContainerStyle={styles.userlistContent}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={renderEmpty}
          />
        )}
        {isMyDates && (
          <TouchableOpacity
            onPress={() => setDateFilterPicker(true)}
            activeOpacity={0.7}
            style={styles.dateFilter}>
            <Text style={styles.dateText}>{dateFilter}</Text>
            <CalendarSvg />
          </TouchableOpacity>
        )}
        {isMyDates && (
          <MyDatesPager
            dates={myDates}
            onPageChangeCallback={pageIndex => setPagerPage(pageIndex)}
            onPrimaryPress={() => navigation.navigate(ScreenNames.ChatStack)}
            openDateFilter={() => setDateFilterPicker(true)}
          />
        )}
        {isMyDates && (
          <View style={styles.dotRow}>
            {myDates.map((item, index) => (
              <View
                key={`key-${index}`}
                style={styles.dot(index === pagerPage)}
              />
            ))}
          </View>
        )}
        <AreaPickerModal
          areaArray={[
            'Today',
            'This month',
            'The last 7 days',
            'The last 15 days',
          ]}
          isVisible={datFilterPicker}
          close={() => setDateFilterPicker(false)}
          setPlace={setDateFilter}
          place={dateFilter}
        />
      </View>
    </ScreenWrapper>
  );
}
