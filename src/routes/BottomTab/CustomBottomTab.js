import React from 'react';
import {View, Image, TouchableOpacity, Text, Platform} from 'react-native';
import {height, width} from '~utills/Dimension';
import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import TabHeartActive from '~assets/images/tabHeartActive.png';
import TabHeartInactive from '~assets/images/tabHeartInactive.png';

import LikeInactive from '~assets/images/likeInactive.png';
import LikeActive from '~assets/images/likeActive.png';

import ChatInactive from '~assets/images/chatInactive.png';
import ChatActive from '~assets/images/chatActive.png';

import ProfileActive from '~assets/images/profileActive.png';
import ProfileInactive from '~assets/images/profileInactive.png';

const CustomBottomTab = ({state, descriptors, navigation}) => {
  const icons = [
    {
      label: 'HomeStack',
      activeIcon: TabHeartActive,
      InactiveIcon: TabHeartInactive,
    },
    {label: 'LikeStack', activeIcon: LikeActive, InactiveIcon: LikeInactive},
    {label: 'ChatStack', activeIcon: ChatActive, InactiveIcon: ChatInactive},
    {
      label: 'ProfileStack',
      activeIcon: ProfileActive,
      InactiveIcon: ProfileInactive,
    },
  ];
  const getIcon = (label, isFocused) => {
    const icon = icons.find(item => item.label === label);
    if (isFocused) return icon.activeIcon;
    return icon.InactiveIcon;
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}>
            <Image
              source={getIcon(label, isFocused)}
              style={styles.icon(label)}
              resizeMode={'contain'}
            />
            {isFocused && <View style={styles.redDot} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    width: width(85),
    backgroundColor: AppColors.white,
    borderRadius: height(3),
    position: 'absolute',
    alignSelf: 'center',
    bottom: Platform.OS == 'android' ? height(3) : height(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingBottom: height(1.3),
    paddingTop: height(1.3),
    flexDirection: 'row',
  },
  redDot: {
    height: width(1.5),
    width: width(1.5),
    borderRadius: width(0.75),
    backgroundColor: AppColors.pink,
    marginTop: height(0.5),
  },
  icon: label => ({
    height: label === 'HomeStack' ? height(2.2) : height(2.5),
  }),
  tabItem: {
    alignItems: 'center',
    width: width(12),
  },
});
