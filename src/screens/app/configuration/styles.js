import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  OK: {
    color: AppColors.darkPurple,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
  },
  right: {
    position: 'absolute',
    right: -width(27),
    top: height(60),
    transform: [{rotate: '18deg'}],
  },
  left: {
    zIndex: 0,
    position: 'absolute',
    left: -width(31),
    // top: height(60),
  },
  listContent: {},
  tabs: {
    flexGrow: 0,
    marginLeft: width(4),
    zIndex: 1,
    marginTop: height(1.5),
    alignSelf: 'center',
  },
  tabItem: {
    marginRight: width(5),
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
  bottomLine: {
    height: 4,
    width: '80%',
    backgroundColor: AppColors.purple,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'center',
  },
  invisible: {
    height: 4,
    width: '45%',
    backgroundColor: AppColors.bgWhite,
    borderRadius: 5,
    marginTop: 5,
  },
  accountContainer: {
    paddingHorizontal: width(8),
    marginTop: height(5),
    alignItems: 'center',
    zIndex: 1,
  },
  descr: {
    color: AppColors.greyText,
    fontWeight: '300',
    fontSize: width(3.5),
    marginVertical: height(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  slider: {
    width: width(80),
    height: 40,
    marginTop: height(3),
  },
  rowDescr: {
    flex: 1,
  },
  global: {
    width: '100%',
    marginTop: height(2.5),
  },
  community: {
    alignSelf: 'flex-start',
    marginBottom: height(1.5),
  },
  heart: {
    width: width(12),
    marginRight: width(2),
  },
  version: {
    color: AppColors.black,
    fontSize: width(4),
  },
  leftNot: {
    position: 'absolute',
    top: height(62),
    left: -width(26),
    zIndex: 0,
  },
  rightNot: {
    position: 'absolute',
    top: height(80),
    right: -width(28),
    zIndex: 0,
  },
});
export default styles;
