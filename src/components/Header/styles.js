import {Platform, StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.white,
      width: width(100),
      height: height(9),
      justifyContent: 'center',
      alignItems: 'center',
      // shadowColor: AppColors.grey,
      // shadowOffset: {width: 0, height: 3},
      // shadowOpacity: 0.22,
      // shadowRadius: 2.22,

      // elevation: 3,
    },
    chatHeader: {
      width: width(100),
      flexDirection: 'row',
      zIndex: 1,
      backgroundColor: AppColors.white,
      height: height(11),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width(5),
      borderBottomRightRadius: width(5),
      borderBottomLeftRadius: width(5),
      shadowColor: AppColors.grey,
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    nameText: {
      fontFamily: Fonts.MontsSemiBold,
      color: AppColors.purple,
      fontSize: width(4.5),
      marginLeft: width(3),
    },
    status: {
      height: height(1.5),
      width: height(1.5),
      borderRadius: height(0.75),
      backgroundColor: AppColors.green,
      marginLeft: width(3),
    },
    btn: {
      width: '45%',
      position: 'absolute',
      right: width(5),
    },
    //// SIMPLE HEADER
    simpleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: Platform.OS === 'ios' ? height(7.5) : height(9),
      width: width(100),
    },
    corner: {
      height: '100%',
      width: width(20),
      alignItems: 'center',
      justifyContent: 'center',
    },
    simpleTitle: {
      fontFamily: Fonts.MontsSemiBold,
      color: AppColors.darkPurple,
      fontSize: width(4.5),
    },
    simpleMiddle: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
});
export default styles;
