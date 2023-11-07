import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  leftHeart: {
    position: 'absolute',
    left: -width(27),
    top: height(8),
  },
  rightHeart: {
    position: 'absolute',
    right: -width(25),
    top: height(3),
  },
  back: {
    marginLeft: width(5),
    marginTop: height(3),
  },
  title: {
    alignSelf: 'center',
    fontSize: width(7),
    color: AppColors.darkPurple,
    marginTop: height(6),
    fontWeight: 'bold',
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
    paddingHorizontal: width(10),
    paddingVertical: height(1.5),
    marginTop: height(4),
    justifyContent: 'space-around'
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: width(3),
    height: height(4),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple,
  },
  codeText: {
    color: AppColors.greyText,
    fontSize: width(4.5),
    fontFamily: Fonts.MontsMedium
  },
  phoneNumberInput: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple,
    flex: 1,
    marginLeft: width(3),
    color: AppColors.greyText,
    fontSize: width(3.5),
  },
});
export default styles;
