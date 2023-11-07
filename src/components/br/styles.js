import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  break: {
    width: width(80),
    height: 0.6,
    backgroundColor: AppColors.grey,
    alignSelf: 'center',
    marginVertical: height(3),
  },
});
export default styles;
