import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rotation: {
    transform: [{rotate: '180deg'}],
  },
  subtitle: {
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
    color: AppColors.purple,
  },
  descr: {
    color: AppColors.greyText,
    fontWeight: '300',
    fontSize: width(3.5),
    marginVertical: height(1),
  },
});
export default styles;
