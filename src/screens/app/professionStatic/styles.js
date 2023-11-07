import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  leftHeart: {
    position: 'absolute',
    transform: [{rotate: '-8deg'}],
    left: -width(18),
    top: height(18),
  },
  rightHeart: {
    position: 'absolute',
    right: -width(20),
    top: height(5),
  },
  bottomHeart: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -height(16),
  },
  centerView: {
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  title: {
    color: AppColors.darkPurple,
    fontWeight: '500',
    fontSize: width(7),
    textAlign: 'center',
    maxWidth: width(75),
    marginTop: height(35),
    marginBottom: height(3),
  },
  // briefcase: {},
});
export default styles;
