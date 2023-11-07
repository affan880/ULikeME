import Avatar1 from '~assets/images/match3.png';
import Avatar2 from '~assets/images/match4.png';
import Avatar3 from '~assets/images/match5.png';
import Avatar4 from '~assets/images/match6.png';
import SelectedCircle from '~assets/images/selectedCircle.png';
import EmptyCircle from '~assets/images/unselectedCircle.png';
import { AreYouSureModal, Button, SadSvg, ScreenWrapper, UserEvent } from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import { SimpleHeader } from '~components/Header';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import { height } from '~utills/Dimension';
import { UserEventType } from '~utills/Enums';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const userEventsArray = [
  {
    id: '1',
    name: 'John',
    subtitle: 'Te gusta',
    type: UserEventType.LIKE,
    image: Avatar1,
  },
  {
    id: '2',
    name: 'Thomas',
    subtitle: 'Ulikeme',
    type: UserEventType.ULIKEME,
    image: Avatar2,
  },
  {
    id: '3',
    name: 'User 3',
    subtitle: 'Test',
    type: UserEventType.DATE,
    image: Avatar3,
  },
  {
    id: '4',
    name: 'User 4',
    subtitle: 'Idk',
    type: UserEventType.MATCH,
    image: Avatar4,
  },
];
export default function BlockedContacts({navigation, route}) {
  const [chatUsers, setChatUsers] = useState(userEventsArray);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [areYouSure, setAreYouSure] = useState(false);
  const renderCheckIcon = (isChecked, id) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (isChecked) {
            const tmp = [...selectedUsers];
            const i = selectedUsers.findIndex(item => item === id);
            tmp.splice(i, 1);
            setSelectedUsers(tmp);
          } else {
            setSelectedUsers(prev => [...prev, id]);
          }
        }}>
        <Image
          source={isChecked ? SelectedCircle : EmptyCircle}
          style={styles.img}
        />
      </TouchableOpacity>
    );
  };
  const renderUserEvent = ({item}) => {
    return (
      <UserEvent
        data={item}
        renderRight={() =>
          renderCheckIcon(selectedUsers.includes(item?.id), item?.id)
        }
      />
    );
  };
  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>
      Oops, you don't have any activity yet, start now!
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
      statusBarColor={AppColors.bgWhite}
      headerUnScrollable={() => (
        <SimpleHeader title="Block Contacts" navigation={navigation} />
      )}>
      <View style={styles.mainViewContainer}>
        {/* <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} /> */}
        <TextInput
          style={styles.input}
          onChangeText={value => setSearchText(value)}
          value={searchText}
          autoCapitalize={'none'}
          placeholder={'Search...'}
        />
        <Text style={styles.greyText}>
          The contacts to block will be those who are in your active chats{' '}
        </Text>
        <FlatList
          data={chatUsers}
          renderItem={renderUserEvent}
          style={styles.list}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={renderEmpty}
        />
        {selectedUsers.length > 0 && (
          <Button
            onPress={() => setAreYouSure(true)}
            title={`Block (${selectedUsers.length}) users`}
            containerStyle={{marginTop: height(2)}}
          />
        )}
      </View>
      <AreYouSureModal
        isVisible={areYouSure}
        text={`Are you sure you want to block ${selectedUsers.length} users?`}
        close={() => setAreYouSure(false)}
      />
    </ScreenWrapper>
  );
}
