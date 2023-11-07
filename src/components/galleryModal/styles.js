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
    paddingTop: height(3),
    paddingBottom: height(1),
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height(1),
    paddingHorizontal: width(3),
    width: '80%',
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.greyText,
  },
  img: {
    width: width(10),
  },
  img2: {
    width: width(12),
    marginRight: width(1.5),
  },
  camera: {
    color: AppColors.greyText,
    fontSize: width(4.5),
    fontFamily: Fonts.MontsMedium,
    marginLeft: width(3),
  },
  cross: {
    position: 'absolute',
    right: width(5),
    top: height(2)
  },
});
export default styles;
