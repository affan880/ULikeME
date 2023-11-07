import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';

const styles = StyleSheet.create({
  primary: (disabled) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(25),
    backgroundColor: disabled ? AppColors.purple + '99' : AppColors.purple,
    width: width(85),
    alignSelf: 'center',
    paddingVertical: height(1.8),
  }),
  secondary: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(25),
    backgroundColor: 'transparent',
    width: width(85),
    alignSelf: 'center',
    paddingVertical: height(1.8),
    borderWidth: 1,
    borderColor: AppColors.purple,
  },
  primaryText: {
    color: AppColors.white,
    fontSize: width(4),
  },
  secondaryText: {
    color: AppColors.purple,
    fontWeight: '500',
    fontSize: width(4),
  },

});
export default styles;
