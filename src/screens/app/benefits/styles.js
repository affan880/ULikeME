import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  leftHeart: {
    position: 'absolute',
    left: -width(27),
  },
  bottomHeart: {
    position: 'absolute',
    bottom: -height(6),
    right: -width(19),
    transform: [{rotate: '14deg'}],
  },
  title: {
    fontSize: width(3.35),
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: width(80),
    marginTop: height(2),
    fontWeight: '300',
    color: AppColors.greyText,
  },
  benefitContainer: {
    paddingVertical: height(2),
    paddingHorizontal: width(4),
    flexDirection: 'row',
    alignItems: 'center',
    width: width(90),
    justifyContent: 'space-between',
    alignSelf: 'center',
    // backgroundColor: 'pink',
    marginTop: height(1),
  },
  benefitTitle: {
    color: AppColors.purple,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
  },
  gradient: {
    paddingVertical: height(1),
    paddingHorizontal: width(3),
    borderRadius: width(20),
    minWidth: width(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientText: {
    color: AppColors.white,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
  },
  listContent: {
    paddingBottom: height(5),
    paddingTop: height(1),
  },
});
export default styles;
