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
    top: height(30)
  },
  phoneNumberInput: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple,
    color: AppColors.greyText,
    fontSize: width(4),
    width: width(85),
    alignSelf: 'center',
    marginBottom: height(4),
    marginTop: height(4),
    paddingBottom: height(1),
    textAlign: 'center',
    fontFamily: Fonts.MontsMedium
  },
  back: {
    marginLeft: width(5),
    marginTop: height(3)
  },
  title: {
    alignSelf: 'center',
    fontSize: width(6),
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
  },
 
  
});
export default styles;
