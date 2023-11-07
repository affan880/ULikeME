import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: width(2),
    paddingVertical: height(1.5),
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  iconBorder: (color, isSelected) => ({
    borderWidth: 1,
    borderColor: color,
    height: height(8),
    width: height(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height(4),
    backgroundColor: isSelected ? color : AppColors.transparent,
  }),
  icon: (isSelected, color) => ({
    width: height(3),
    tintColor: isSelected ? AppColors.white : color,
  }),
});
export default styles;
