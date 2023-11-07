import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteBg: {
    backgroundColor: AppColors.white,
    width: width(85),
    minHeight: height(40),
    marginTop: height(4),
    borderRadius: width(5),
    paddingHorizontal: width(5),
    paddingVertical: height(2.5),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  pager: {
    flex: 1,
  },
  img: {
    alignSelf: 'center',
    height: height(9),
    width: height(9),
    borderRadius: height(4.5),
  },
  title: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.purple,
    alignSelf: 'center',
    marginTop: height(1),
    fontSize: width(3.7),
  },
  time: {
    alignSelf: 'center',
    marginTop: height(0.5),
    fontSize: width(3.5),
  },
  icon: {
    width: width(7),
  },
  row: {
    width: width(30),
    flexDirection: 'row',
    alignSelf: 'baseline',
    justifyContent: 'space-evenly',
  },
  column: {
    alignSelf: 'center',
    marginTop: height(1),
  },
  mssgBtn: {
    width: '95%',
    marginTop: height(2),
  },
  couponBtn: {
    width: '95%',
    marginTop: height(1.5),
  },
  leftHeart: {
    transform: [{rotate: '35deg'}],
    position: 'absolute',
    left: -width(15),
  },
  rightHeart: {
    position: 'absolute',
    right: -width(24),
    top: height(20),
  },
  empty: {
    height: height(35),
    width: width(100),
    justifyContent: 'center',
  },
  emptyText: {
    marginBottom: height(3),
    color: AppColors.grey,
    fontSize: width(3.7),
    maxWidth: width(50),
    textAlign: 'center',
    marginLeft: width(15),
  },
  emptyBtn: {
    width: width(50),
    marginTop: height(3),
    marginRight: width(22),
  },
});
export default styles;
