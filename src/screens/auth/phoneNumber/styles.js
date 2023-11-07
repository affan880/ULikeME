import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import Fonts from '~utills/Fonts';
import { height, width } from '~utills/Dimension';

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
    color: AppColors.darkPurple,
    fontWeight: 'bold',
    marginTop: height(6)
  },
  description: {
    alignSelf: 'center',
    fontSize: width(3.3),
    color: AppColors.grey,
    textAlign: 'center',
    maxWidth: width(85),
    marginTop: height(4),
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: width(6),
    paddingVertical: height(1.5),
    marginTop: height(4)
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple
  },
  codeText: {
    color: AppColors.greyText,
    fontSize: width(3.7),
    fontFamily: Fonts.MontsMedium,
  },
  phoneNumberInput: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple,
    flex: 1,
    marginLeft: width(3),
    color: AppColors.greyText,
    fontSize: width(3.7),
    fontFamily: Fonts.MontsMedium,
  }
});
export default styles;
