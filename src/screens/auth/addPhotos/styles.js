import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.bgWhite,
    overflow: 'hidden',
  },
  leftHeart: {
    position: 'absolute',
    left: -width(27),
    top: height(8),
  },
  rightHeart: {
    position: 'absolute',
    right: -width(25),
    top: height(3),
  },
  photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: width(90),
    alignSelf: 'center',
    marginRight: width(1.5)
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
  back: {
    marginLeft: width(6),
    marginTop: height(3),
  },
  title: {
    color: AppColors.darkPurple,
    fontSize: width(7),
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: height(5),
  },
  subtitle: {
    color: AppColors.greyText,
    fontSize: width(3.5),
    fontWeight: '300',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: height(1),
    marginBottom: height(5),
  },
  btn: {
    width: width(80),
    marginTop: height(3),
  },
});
export default styles;
