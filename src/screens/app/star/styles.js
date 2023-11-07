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
    left: -width(28),
    top: height(12),
  },
  rightHeart: {
    position: 'absolute',
    right: -width(30),
    bottom: height(7),
  },
  userlistContent: {
    paddingBottom: height(12),
  },
  tabItem: {
    marginHorizontal: width(3),
  },
  sectionTitle2: isMyDates => ({
    fontFamily: Fonts.MontsSemiBold,
    color: isMyDates ? AppColors.white : AppColors.purple,
    fontSize: width(4),
  }),
  bottomLine: isMyDates => ({
    height: 4,
    width: '80%',
    backgroundColor: isMyDates ? AppColors.white : AppColors.purple,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'center',
  }),
  invisible: isMyDates => ({
    height: 4,
    width: '45%',
    backgroundColor: isMyDates ? AppColors.purple : AppColors.white,
    borderRadius: 5,
    marginTop: 5,
  }),
  deleteBtn: {
    marginTop: height(1),
    alignSelf: 'flex-end',
    marginRight: width(6),
  },
  listContent: {
    paddingHorizontal: width(4),
    paddingVertical: height(1.5),
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
  dotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: height(14),
  },
  dot: isActive => ({
    height: height(1.5),
    width: isActive ? height(3) : height(1.5),
    borderRadius: height(0.75),
    marginRight: width(2),
    backgroundColor: isActive ? AppColors.darkPurple : AppColors.white,
  }),
  dateFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: width(5),
  },
  dateText: {
    color: AppColors.white,
    fontSize: width(4),
    fontFamily: Fonts.MontsSemiBold,
    marginRight: width(2),
  },
});
export default styles;
