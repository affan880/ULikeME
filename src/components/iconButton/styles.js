import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';

const styles = StyleSheet.create({
  primary: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(25),
    backgroundColor: AppColors.purple,
    width: width(85),
    alignSelf: 'center',
    paddingVertical: height(1.8),
  },
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
    flexDirection: 'row'
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
  textContainer: {
    flex: 0.9,
    alignItems: 'center'
  },
  icon: {
    paddingLeft: width(7)
  }
});
export default styles;
