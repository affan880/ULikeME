import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  headerLogo: {
    position: 'absolute',
    top: height(1),
    left: width(4),
    width: width(25),
  },
  purpleCircle: {
    height: height(10),
    width: height(10),
    borderRadius: height(5.5),
    backgroundColor: AppColors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: height(35),
    zIndex: 1,
  },
  wave: {
    position: 'absolute',
    alignSelf: 'center',
    top: height(20),
    zIndex: 0,
  },
  centerHeart: {
    width: height(5),
  },
  emotionContainer: {
    position: 'absolute',
    bottom: height(12),
  },
});
export default styles;
