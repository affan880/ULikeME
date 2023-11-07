import {Platform, StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },
  innerContainer: {
    backgroundColor: AppColors.white,
    width: width(85),
    alignSelf: 'center',
    borderTopRightRadius: width(10),
    borderTopLeftRadius: width(10),
    paddingTop: height(4),
    paddingBottom: height(1),
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height(2),
    paddingHorizontal: width(3),
    width: '80%',
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.greyText,
  },
  img: {
    width: width(6.5),
    marginRight: width(2.5),
  },
  img2: {
    width: width(7),
    marginRight: width(2.5),
  },
  text: {
    fontFamily: Fonts.MontsMedium,
    color: AppColors.purple,
    fontSize: width(4),
  },
  textGrey: {
    fontFamily: Fonts.MontsMedium,
    color: AppColors.greyText,
    fontSize: width(4),
  },
  cross: {
    position: 'absolute',
    right: width(5),
    top: height(2),
  },
});
export default styles;
