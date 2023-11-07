import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height(100),
    width: width(100),
    opacity: 0.97,
    position: 'absolute',
    zIndex: 7,
  },
  img: {
    width: width(70),
  },
});
export default styles;
