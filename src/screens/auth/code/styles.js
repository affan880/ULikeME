import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  leftHeart: {
    position: 'absolute',
    left: -width(27),
    top: height(8)
  },
  rightHeart: {
    position: 'absolute',
    right: -width(25),
    top: height(3)
  },
  back: {
    marginLeft: width(5),
    marginTop: height(3)
  },
  title: {
    alignSelf: 'center',
    fontSize: width(7),
    fontWeight: 'bold',
    color: AppColors.darkPurple,
    marginTop: height(6)
  },
  description: {
    alignSelf: 'center',
    fontSize: width(3.3),
    color: AppColors.grey,
    textAlign: 'center',
    maxWidth: width(85),
  },
  row: {
    alignItems: 'center',
    marginTop: height(4)
  },
  underlineStyleBase: {
    width: width(12),
    height: 45,
    borderWidth: 0,
    color: AppColors.greyText,
    borderBottomWidth: 1,
    fontFamily: Fonts.MontsMedium,
    fontSize: width(4),
    borderColor: AppColors.darkPurple,
  },
  underlineStyleHighLighted: {
    borderColor: AppColors.darkPurple,
  },
});
export default styles;
