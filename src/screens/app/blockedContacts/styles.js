import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: AppColors.bgWhite,
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

  img: {
    height: height(2.5),
    width: height(2.5),
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple,
    color: AppColors.greyText,
    fontSize: width(4),
    width: width(70),
    alignSelf: 'center',
    marginBottom: height(4),
    marginTop: height(4),
    paddingBottom: height(1),
    textAlign: 'center',
    fontFamily: Fonts.MontsMedium,
  },
  greyText: {
    color: AppColors.grey,
    fontWeight: '300',
    fontSize: width(3.5),
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: width(70),
  },
  empty: {
    height: height(35),
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginBottom: height(3),
    color: AppColors.grey,
    fontSize: width(3.7),
    maxWidth: width(70),
    textAlign: 'center',
  },
  emptyBtn: {
    width: width(50),
    marginTop: height(3),
  },
  list: {
    height: height(50),
    marginTop: height(1.5),
    flexGrow: 0,
  },
});
export default styles;
