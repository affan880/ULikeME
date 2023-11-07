import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  container: {
    marginRight: width(3),
    width: width(37),
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    paddingVertical: height(2),
    paddingHorizontal: width(2),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  imgElevation: {
    height: height(12),
    width: height(12),
    borderRadius: height(6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    marginTop: height(1.5),
    color: AppColors.black,
    fontSize: width(3.7),
  },
  subtitle: {
    marginTop: height(1),
    color: AppColors.greyText,
    fontSize: width(3.5),
  },
  spotify: {
    position: 'absolute',
    height: height(4),
    width: height(4),
    borderRadius: height(2),
    bottom: -height(0.25),
    alignSelf: 'center',
    zIndex: 2,
  },
  opacity: {
    backgroundColor: AppColors.black,
    height: height(12),
    width: height(12),
    borderRadius: height(6),
  },
});
export default styles;
