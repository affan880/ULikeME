import Logo from '~assets/images/headerLogo.png';
import Match3 from '~assets/images/match3.png';
import Match4 from '~assets/images/match4.png';
import Match5 from '~assets/images/match5.png';
import Match6 from '~assets/images/match6.png';
import Match7 from '~assets/images/match7.png';
import Heart from '~assets/images/tabHeartActive.png';
import { checkAndCreateChat } from '~backend/chatService';
import { fetchMatches, firestoreDB, getUserProfile } from '~backend/firebase';
import { ScreenWrapper } from '~components';
import { selectUser } from '~redux/slices/authSlice';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import CommonStyles from '~utills/CommonStyles';
import { height, width } from '~utills/Dimension';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

const newMatchesArray = [
  {id: '1', isHeart: true, image: Match3},
  {id: '2', isHeart: false, image: Match4},
  {id: '3', isHeart: true, image: Match5},
  {id: '4', isHeart: false, image: Match6},
  {id: '5', isHeart: false, image: Match7},
];
const chatTypeArray = [
  {id: '1', title: 'All'},
  {id: '2', title: '😊'},
  {id: '3', title: '🙃'},
  {id: '4', title: '😒'},
];
export default function ChatList({navigation, route}) {
  const [newMatches, setNewMacthes] = useState(newMatchesArray);
  const [tab, setTab] = useState(0); // 0 => Messages // 1 => Group Messages
  const [chatType, setChatType] = useState(chatTypeArray);
  const [selectedChatType, setSelectedChatType] = useState(0);
  const [chatList, setChatlist] = useState(chatTypeArray);
  const userData = useSelector(selectUser)

  const getCharList = () => {
    fetchMatches(userData.uid).then((res) => {
      const chatListArray = [];
      const promises = res?.map((id) => getUserProfile(id));
  
      Promise.all(promises).then((results) => {
        results.forEach((res) => {
          chatListArray.push({
            ...res,
            myPhoto: userData.photoURL
          });
        });
        setNewMacthes(chatListArray)
        setChatlist(chatListArray);
      });
    });
  }

  useEffect(() => {
    const userRef = firestoreDB().collection('users').doc(userData.uid);
  
    const unsubscribe = userRef.onSnapshot((snapshot) => {
      const updatedData = snapshot.data();
      const chatListArray = [];
      const promises = updatedData?.matches?.map((id) => getUserProfile(id));
      Promise.all(promises).then((results) => {
        results.forEach((res) => {
          chatListArray.push(res);
        });
        setChatlist(chatListArray);
      });
    });
  
    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, [userData.uid]);
  
  useEffect(() => {
    getCharList()
  }, []);
  

  const renderNewMatchItem = ({item, index}) => {
    return (
      <TouchableOpacity
      key={item?.id}
        onPress={() =>{
          navigation.navigate(ScreenNames.UserProfileScreen, {user: item})
        }}
        style={styles.matchItemContainer}>
        <Image source={{
          uri: item?.photo
        }} style={styles.newMatchImage} />
        {item?.isHeart && (
          <Image
            source={Heart}
            style={styles.heartImage}
            resizeMode={'contain'}
          />
        )}
      </TouchableOpacity>
    );
  };
  const renderChatType = ({item, index}) => {
    const isSelected = selectedChatType === index;
    return (
      <TouchableOpacity
        onPress={() => setSelectedChatType(index)}
        activeOpacity={0.7}
        style={
          isSelected ? styles.typeContainerActive : styles.typeContainerInactive
        }>
        <Text
          style={isSelected ? styles.typeTextActive : styles.typeTextInActive}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderChatListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>{
          checkAndCreateChat(userData.uid, item.id).then((res)=>{
            navigation.navigate(ScreenNames.ChatScreen, {chatWith: item, chatId: res})
          })
        }
        }
        activeOpacity={0.7}
        style={styles.chatlistItem}>
        <View>
          <Image source={{
            uri: item.photo
          }} style={styles.chatListImage} />
          <View
            style={item.isOnline ? styles.statusOnline : styles.statusOffline}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={CommonStyles.rowAlignItemCenter}>
            <Text style={styles.nameText}>{item.name}</Text>
            {item.isHeart && (
              <Image
                source={Logo}
                style={styles.isHeartImg}
                resizeMode={'contain'}
              />
            )}
          </View>
          <Text style={styles.descr}>{item.descr}</Text>
          {chatList.length - 1 !== index && <View style={styles.line} />}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScreenWrapper
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}>
      <View style={styles.mainViewContainer}>
        <View style={styles.topListContainer}>
          <Text style={styles.sectionTitle}>New matches</Text>
          <FlatList
            style={styles.newMatchList}
            horizontal
            data={newMatches}
            renderItem={renderNewMatchItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={[
            CommonStyles.rowAlignItemCenter,
            {marginHorizontal: width(3), marginTop: height(1.5)},
          ]}>
          <TouchableOpacity
            onPress={() => setTab(0)}
            activeOpacity={0.7}
            style={styles.tabItem}>
            <Text style={styles.sectionTitle2}>Messages</Text>
            <View style={tab === 0 ? styles.bottomLine : styles.invisible} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab(1)}
            activeOpacity={0.7}
            style={styles.tabItem}>
            <Text style={styles.sectionTitle2}>Group Messages</Text>
            <View style={tab === 1 ? styles.bottomLine : styles.invisible} />
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          style={styles.typeList}
          contentContainerStyle={{paddingHorizontal: width(4)}}
          data={chatType}
          renderItem={renderChatType}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
        <FlatList
          style={styles.chatList}
          data={chatList}
          renderItem={renderChatListItem}
          contentContainerStyle={{paddingBottom: height(12)}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
      </View>
    </ScreenWrapper>
  );
}
