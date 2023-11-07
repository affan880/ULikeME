import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
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
  interestList: {
    borderTopWidth: height(0.5),
    borderTopColor: AppColors.purple,
  },
  interestListContent: {
    paddingVertical: height(2),
    paddingHorizontal: width(4),
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
  break: {
    width: width(80),
    height: 0.6,
    backgroundColor: AppColors.grey,
    alignSelf: 'center',
    marginVertical: height(3),
  },
  subtitle: {
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
    color: AppColors.purple,
  },
  emotionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width(80),
    alignSelf: 'center',
    paddingVertical: height(1.5),
    marginTop: height(2),
  },
  emotionItem: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  emotionIcon: {
    width: width(6),
  },
  cross: {
    position: 'absolute',
    right: width(5),
    top: height(2),
    zIndex: 10
  },
});
export default styles;
