import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  pagerItem: {
    flex: 1,
  },
  pagerImage: {
    height: height(91),
    width: width(100),
    zIndex: 0,
  },
  linearGradient: {
    height: '65%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },
  detailView: {
    position: 'absolute',
    bottom: 0,
    height: height(45),
    // paddingHorizontal: width(5),
  },
  name: {
    color: AppColors.white,
    fontSize: width(8),
    fontWeight: '500',
  },
  descr: {
    color: AppColors.white,
    fontSize: width(3.7),
    marginVertical: height(1.5),
  },
  interestContainer: {
    paddingHorizontal: width(3),
    paddingVertical: height(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.purple,
    marginEnd: width(2),
    borderRadius: width(10),
  },
  interestText: {
    color: AppColors.white,
    fontSize: width(3.3),
    fontWeight: '500',
  },
  nopeContainer: {
    borderWidth: 2,
    borderColor: AppColors.orange,
    alignSelf: 'baseline',
    paddingHorizontal: width(6),
    paddingVertical: height(1),
    transform: [{rotate: '-30deg'}],
    position: 'absolute',
    top: height(12),
    left: width(10),
  },
  nopeText: {
    color: AppColors.orange,
    fontFamily: Fonts.MontsBold,
    fontSize: width(7),
  },
  likeContainer: {
    borderWidth: 2,
    borderColor: AppColors.green,
    alignSelf: 'baseline',
    paddingHorizontal: width(6),
    paddingVertical: height(1),
    transform: [{rotate: '15deg'}],
    position: 'absolute',
    top: height(12),
    right: width(10),
  },
  likeText: {
    color: AppColors.green,
    fontFamily: Fonts.MontsBold,
    fontSize: width(7),
  },
  pageDotsContainer: {
    width: width(30),
    minHeight: height(3),
    position: 'absolute',
    alignSelf: 'center',
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: isSelected => ({
    height: height(1.5),
    width: height(1.5),
    backgroundColor: isSelected ? AppColors.purple : AppColors.white,
    borderRadius: height(0.75),
    marginEnd: width(2),
  }),
 
});
export default styles;
