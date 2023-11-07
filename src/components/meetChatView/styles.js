import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  container: {alignItems: 'center', paddingVertical: height(3)},
  topContainer: {
    textAlign: 'center',
    alignItems: 'center',
  },
  img: {
    marginVertical: height(1.5),
  },
  greyText: {
    color: AppColors.lightGreyText,
  },
  whiteBg: {
    paddingVertical: height(3),
    paddingHorizontal: width(5),
    backgroundColor: AppColors.white,
    width: width(90),
    borderRadius: width(4),
    marginTop: height(2),
  },
  title: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.purple,
    fontSize: width(3.7),
    marginBottom: height(2),
    textAlign: 'center',
  },
  meetRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meetImg: {
    height: height(17),
    width: width(20),
    borderRadius: width(3),
  },
  rowRight: {
    height: '100%',
    paddingVertical: height(1.5),
    paddingHorizontal: width(4),
  },
  dropDown: {
    width: width(60),
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: AppColors.purple,
  },
  value: {
    color: AppColors.black,
    marginTop: height(0.5),
  },
  arrowDown: {
    transform: [{rotate: '-90deg'}],
    marginLeft: width(3),
  },
  btn: {
    width: '65%',
    marginTop: height(2),
    paddingVertical: height(1.5),
  },
});
export default styles;
