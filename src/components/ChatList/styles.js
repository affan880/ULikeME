import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import AppColors from '~utills/AppColors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    paddingHorizontal: width(2),
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
    alignSelf:'baseline',
    // backgroundColor: 'red',
    overflow: 'hidden',
    width: width(100),
  },
  avatarImg: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mssgImage: {
    height: height(15),
    width: height(15),
  },
  textContainer: {
    paddingHorizontal: width(4),
    paddingVertical: height(1.5),
  },
  contentContainer: {
    paddingTop: height(8),
  },

  ///////MESSAGE STYLES
  mssgContainer: {
    backgroundColor: AppColors.white,
    maxWidth: width(72),
    alignSelf: 'baseline',
    borderRadius: width(4),
    marginLeft: width(2),
    marginVertical: height(2),
  },
  mssgTimeText: {
    color: AppColors.white,
    fontSize: width(2.8),
    marginTop: height(1),
  },
  mssgText: {
    color: AppColors.black,
    fontSize: width(3.7),
    fontWeight: '300',
  },
  /////////
  //////MY MESSAGE
  myMssgContainer: {
    backgroundColor: AppColors.blueLight,
    maxWidth: width(72),
    borderRadius: width(4),
    marginRight: width(2),
    marginVertical: height(2),
  },
  myMssgText: {
    color: AppColors.white,
    fontSize: width(3.7),
    fontWeight: '100',
  },

  ///////
});
export default styles;
