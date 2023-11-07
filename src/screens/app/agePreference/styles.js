import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.bgWhite,
    alignItems: 'center',
    overflow: 'hidden',
  },
  back: {
    alignSelf: 'flex-start',
    marginLeft: width(5),
    marginTop: height(2.5),
  },
  leftHeart: {
    position: 'absolute',
    left: -width(27),
    top: height(8),
  },
  rightHeart: {
    position: 'absolute',
    right: -width(21),
    bottom: height(15),
  },
  title: {
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4.5),
    color: AppColors.purple,
    marginTop: height(20),
  },
  ageRange: {
    fontWeight: '500',
    fontSize: width(8),
    color: AppColors.darkPurple,
    marginTop: height(1),
  },
  slider: {
    width: width(80),
    height: 40,
    marginTop: height(3)
  },
});
export default styles;
