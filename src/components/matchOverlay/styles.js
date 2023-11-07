import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  container: {
    width: width(100),
    marginTop: height(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width(40),
  },
  title: {
    alignSelf: 'center',
    fontSize: width(9.5),
    color: AppColors.white,
    fontWeight: '400'
  }  
});
export default styles;
