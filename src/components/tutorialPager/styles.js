import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';

const styles = StyleSheet.create({
  pagerItem: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    // justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
  },
  title: {
    color: AppColors.white,
    fontSize: width(7),
    alignSelf: 'center',
    marginTop: height(30),
  },
  subtitle: {
    color: AppColors.white,
    fontSize: width(6),
    alignSelf: 'center',
    marginTop: height(1.5),
  },
  btn: {
    width: width(80),
    marginTop: height(5),
  },
  tap: {
    width: width(18),
    alignSelf: 'center',
    marginTop: height(2),
  },
  like: {
    width: width(7),
    alignSelf: 'center',
  },
  smallText: {
    color: AppColors.white,
    fontSize: width(3.5),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: height(1.5),
    maxWidth: width(70),
  },
  section: {
    marginTop: height(3),
  },
  face: {
    width: width(25),
    alignSelf: 'center',
    marginTop: height(27),
  },
  faceBtn: {
    marginTop: height(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: height(3),
    alignSelf: 'center',
  },
  dots: {
    height: height(1.2),
    width: height(1.2),
    borderRadius: height(0.6),
    backgroundColor: AppColors.white,
    marginRight: width(1.5),
  },
  dotsActive: {
    height: height(1.3),
    width: height(2.3),
    borderRadius: height(0.6),
    backgroundColor: AppColors.purple,
    marginRight: width(1.5),
  },
  heart: {
    width: width(15),
    alignSelf: 'center',
    marginTop: height(15),
  },
  readyText: {
    color: AppColors.white,
    fontSize: width(4.5),
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: height(1.5),
  },
  centerText: {
    maxWidth: width(85),
    color: AppColors.white,
    fontSize: width(7),
    alignSelf: 'center',
    marginTop: height(10),
    textAlign: 'center',
  },
});
export default styles;
