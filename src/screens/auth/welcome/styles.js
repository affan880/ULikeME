import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  back: {
    top: height(8),
    alignSelf: 'flex-start',
    marginLeft: width(6),
  },
  dimBlackContainer: {
    flex: 1,
    backgroundColor: AppColors.black,
    opacity: 0.8,
    alignItems: 'center',
  },
  title: {
    color: AppColors.white,
    fontSize: width(7.5),
    alignSelf: 'center',
    top: height(17),
  },
  mid: {
    top: height(22),
  },
  image: {
    height: height(3),
    width: height(3),
    marginTop: height(4),
  },
  descr: {
    color: AppColors.white,
    textAlign: 'center',
    marginTop: height(2),
  },
  sectionContainer: {
    alignItems: 'center',
    width: width(70),
  },
});
export default styles;
