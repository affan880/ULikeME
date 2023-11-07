import {Platform, StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    // minHeight: height(40),
    width: width(85),
    backgroundColor: AppColors.white,
    borderRadius: width(6),
    paddingVertical: height(2.5),
  },
  title: {
    color: AppColors.purple,
    fontSize: width(4.5),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    width: '60%',
    marginTop: Platform.OS == 'ios' ? 0 : height(3),
  },
  picker: {
    width: '80%',
    alignSelf: 'center',
    marginTop: Platform.OS == 'ios' ? 0 : height(2),
    color: AppColors.darkPurple,
  },
  cross: {
    alignSelf: 'flex-end',
    marginRight: width(6),
  },
});
export default styles;
