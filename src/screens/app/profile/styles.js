import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  headerLogo: {
    position: 'absolute',
    top: height(1),
    left: width(4),
    width: width(25),
  },
  purpleCircle: {
    height: height(10),
    width: height(10),
    borderRadius: height(5.5),
    backgroundColor: AppColors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: height(35),
    zIndex: 1,
  },
  wave: {
    position: 'absolute',
    alignSelf: 'center',
    top: height(20),
    zIndex: 0,
  },
  centerHeart: {
    width: height(5),
  },
  emotionContainer: {
    position: 'absolute',
    bottom: height(12),
  },
  heartLeft: {
    position: 'absolute',
    left: -width(22),
    top: height(6),
  },
  heartRight: {
    position: 'absolute',
    right: -width(24),
    top: height(18),
  },
  avatarContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: height(7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  avatar: {
    height: height(17),
    width: height(17),
    borderRadius: height(8.5),
  },
  name: {
    color: AppColors.white,
    fontSize: width(7.5),
    marginTop: height(1.5),
  },
  age: {
    color: AppColors.white,
    fontSize: width(4.5),
    marginTop: height(0.5),
    fontFamily: Fonts.MontsMedium,
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width(85),
    alignSelf: 'center',
    paddingVertical: height(1.7),
    paddingHorizontal: width(5),
    borderRadius: width(20),
    marginTop: height(3),
  },
  pointText: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.white,
    fontSize: width(4),
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height(1.5),
    width: width(80),
    paddingTop: height(2),
    paddingBottom: height(3),
    borderBottomWidth: 0.25,
    borderBottomColor: AppColors.white,
  },
  optionTitle: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.white,
    fontSize: width(4.5),
    marginLeft: width(3),
    flex: 1,
  },
  rotation: {
    transform: [{rotate: '180deg'}],
  },
  completeContainer: {
    paddingVertical: height(1.2),
    paddingHorizontal: width(3),
    borderRadius: height(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  percent: {
    color: AppColors.white,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
  },
  settingsSvg: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: width(6),
    top: height(3),
  },
});
export default styles;
