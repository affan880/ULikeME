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
    left: -width(27),
    zIndex: 1,
  },
  bottomHeart: {
    position: 'absolute',
    top: height(50),
    right: -width(24),
    transform: [{rotate: '16deg'}],
  },
  OK: {
    color: AppColors.darkPurple,
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
  },
  tabRow: isEdit => ({
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: width(100),
    paddingHorizontal: width(5),
    alignSelf: 'center',
    height: height(8),
    justifyContent: 'space-around',
    backgroundColor: isEdit ? AppColors.bgWhite : AppColors.purple,
  }),
  subtitle: {
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
    color: AppColors.purple,
  },
  tabText: (dim, isEdit) => ({
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
    color: isEdit ? AppColors.purple : AppColors.white,
    opacity: dim ? 0.6 : 1,
  }),
  boxContainer: {},
  photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: width(90),
    alignSelf: 'center',
    marginTop: height(2),
  },
  photoContainer: {
    backgroundColor: AppColors.bgGrey3,
    height: width(33),
    width: width(33),
    borderRadius: width(16.5),
    marginBottom: height(3),
  },
  photo: {
    zIndex: 0,
    height: width(33),
    width: width(33),
    borderRadius: width(16.5),
  },
  plus: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  editContainer: {
    paddingHorizontal: width(6),
    paddingVertical: height(2),
  },
  descr: {
    color: AppColors.greyText,
    fontWeight: '300',
    fontSize: width(3.5),
    marginVertical: height(1),
  },
  section: {},
  aboutMeInput: {
    backgroundColor: AppColors.white,
    height: height(10),
    borderRadius: width(3),
    marginTop: height(2),
    paddingHorizontal: width(2.5),
    color: AppColors.greyText,
    fontWeight: '300',
    fontSize: width(3.5),
    // paddingVertical: height(5),
  },
  break: {
    width: width(80),
    height: 0.6,
    backgroundColor: AppColors.grey,
    alignSelf: 'center',
    marginVertical: height(3),
  },
  socialIcon: {
    width: width(10),
  },
  connectText: {
    flex: 1,
    paddingHorizontal: width(3),
    color: AppColors.greyText,
    fontWeight: '300',
    fontSize: width(3.5),
  },
  connectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rotation: {
    transform: [{rotate: '180deg'}],
  },
  pager: {
    height: height(50),
    width: width(100),
  },
  imageContainer: {
    flex: 1,
  },
  pagerImage: {
    height: height(60),
    width: width(100),
  },
  interestContainer: {
    paddingVertical: height(1),
    alignSelf: 'baseline',
    backgroundColor: AppColors.bgWhite,
    borderWidth: 0.5,
    borderColor: AppColors.purple,
    paddingHorizontal: width(2),
    borderRadius: width(10),
    marginRight: width(2.5),
  },
  interestext: {
    color: AppColors.purple,
    fontWeight: '300',
    fontSize: width(3.5),
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
    width: isSelected ? height(3) : height(1.5),
    backgroundColor: isSelected ? AppColors.purple : AppColors.white,
    borderRadius: height(0.75),
    marginEnd: width(2),
  }),
  interestList: {
    borderTopWidth: height(0.5),
    borderTopColor: AppColors.purple,
  },
  interestListContent: {
    paddingVertical: height(2),
    paddingHorizontal: width(4),
  },
  menuButton: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),

    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBtnPress: {
    position: 'absolute',
    right: width(5),
    top: height(46),
    zIndex: 1,
  },
  title: {
    fontSize: width(8),
    color: AppColors.darkPurple,
    fontWeight: '500',
  },
  padding: {
    paddingHorizontal: width(5.5),
  },
  icon: {
    width: width(4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewDescr: {
    color: AppColors.black,
    fontWeight: '300',
    fontSize: width(3.7),
    paddingHorizontal: width(1),
    lineHeight: 24,
    textAlign: 'left',
  },
  musicList: {},
  musicListContent: {
    paddingHorizontal: width(6),
    paddingTop: height(2),
    paddingBottom: height(0.5),
  },
  instaList: {},
  instaListContent: {
    paddingHorizontal: width(6),
    paddingTop: height(2),
    paddingBottom: height(0.5),
  },
  instaAvatar: {
    height: height(13),
    width: height(13),
    marginRight: width(1),
    borderRadius: height(2),
  },
  instaIcon: {
    width: width(12),
    height: height(5),
    position: 'absolute',
    bottom: -height(1.5),
    alignSelf: 'center',
  },
});
export default styles;
