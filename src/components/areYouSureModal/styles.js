import {Platform, StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

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
    fontSize: width(4),
    textAlign: 'center',
    fontFamily: Fonts.MontsSemiBold,
    maxWidth: width(55),
    alignSelf: 'center',
    paddingVertical: height(2),
  },
  btn: {
    width: '60%',
    marginTop: height(1.5),
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
