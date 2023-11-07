import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
    paddingHorizontal: width(8),
    marginTop: height(5),
    alignItems: 'center',
    zIndex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle2: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.purple,
    fontSize: width(4),
  },
  sectionTitle: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.greyText,
    fontSize: width(4),
  },
  leftNot: {
    position: 'absolute',
    top: height(25),
    left: -width(26),
    zIndex: 0,
  },
  rightNot: {
    position: 'absolute',
    top: height(50),
    right: -width(27),
    zIndex: 0,
  },
});
export default styles;
