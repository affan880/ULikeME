import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.purple,
    fontSize: width(4),
    paddingHorizontal: width(6),
    paddingVertical: height(2.5),
  },
  sectionTitle2: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.purple,
    fontSize: width(4),
  },
  topListContainer: {},
  ////Match ITEM
  newMatchList: {
    paddingLeft: width(5),
    paddingBottom: height(1.5),
  },
  matchItemContainer: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),
    overflow: 'visible',
    marginRight: width(2),
  },
  newMatchImage: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),
  },
  heartImage: {
    width: width(6),
    position: 'absolute',
    alignSelf: 'center',
    bottom: -height(2.3),
    height: height(5),
  },
  bottomLine: {
    height: 4,
    width: '45%',
    backgroundColor: AppColors.purple,
    borderRadius: 5,
    marginTop: 5,
  },
  invisible: {
    height: 4,
    width: '45%',
    backgroundColor: AppColors.bgWhite,
    borderRadius: 5,
    marginTop: 5,
  },
  //////
  tabItem: {
    marginHorizontal: width(3),
  },
  ////type item
  typeContainerInactive: {
    paddingHorizontal: width(3),
    minWidth: width(20),
    minHeight: height(4),
    backgroundColor: AppColors.bgGrey,
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width(3.5),
    borderRadius: width(10),
  },
  typeContainerActive: {
    paddingHorizontal: width(3),
    minWidth: width(20),
    minHeight: height(4),
    backgroundColor: AppColors.purple50,
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width(3.5),
    borderRadius: width(10),
  },
  typeTextActive: {
    color: AppColors.purple,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(3.5),
  },
  typeTextInActive: {
    color: AppColors.grey,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(3.5),
  },
  /////
  typeList: {
    paddingTop: height(2),
    flexGrow: 0.02,
  },
  //// CHAT LIST ITEM
  chatlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height(1.5),
    paddingHorizontal: width(5),
  },
  chatListImage: {
    height: height(9),
    borderRadius: height(4.5),
    width: height(9),
  },
  chatList: {
    flex: 1,
    // flexGrow: 0,
  },
  statusOnline: {
    height: height(1.5),
    width: height(1.5),
    borderRadius: height(0.75),
    backgroundColor: AppColors.green,
    position: 'absolute',
    right: width(1),
    bottom: 0,
    borderWidth: 1.5,
    borderColor: AppColors.white,
  },
  statusOffline: {
    height: height(1.5),
    width: height(1.5),
    borderRadius: height(0.75),
    backgroundColor: AppColors.red,
    position: 'absolute',
    right: width(1),
    bottom: 0,
    borderWidth: 1.5,
    borderColor: AppColors.white,
  },
  textContainer: {
    maxWidth: width(60),
    marginLeft: width(5),
  },
  nameText: {
    color: AppColors.darkPurple,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
  },
  descr: {
    fontWeight: '300',
    marginTop: height(0.75),
    color: AppColors.black,
  },
  isHeartImg: {
    width: width(15),
    height: height(3),
    marginLeft: width(2),
  },
  line: {
    width: width(60),
    marginTop: height(1),
    opacity: 0.5,
    height: 0.75,
    backgroundColor: AppColors.bgGrey2,
  },
});
export default styles;
