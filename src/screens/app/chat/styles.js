import {Platform, StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  statusContainer: {
    marginRight: width(3),
  },
  footerContainer: {
    height: Platform.OS == 'ios' ? height(12) : height(10.5),
    backgroundColor: AppColors.white,
    flexDirection: 'row',
    borderTopRightRadius: width(5),
    borderTopLeftRadius: width(5),
    alignItems: 'center',
    paddingBottom: Platform.OS == 'ios' ? height(2) : 0,
  },
  corner: {
    width: width(16),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width(4),
  },
  input: {
    height: '60%',
    width: '60%',
    marginHorizontal: width(5),
    borderRadius: height(20),
    paddingHorizontal: width(4),
    color: AppColors.black,
    backgroundColor: AppColors.bgGrey + '90',
  },
  mic: {
    width: width(4),
    marginLeft: width(2),
  },
  star: {
    width: width(10),
    marginBottom: height(0.5),
  },
  overlayText: {
    color: AppColors.white,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: width(4),
  },
  overlayTextContainer: {
    width: width(65),
    position: 'absolute',
    bottom: height(18),
    left: width(2),
    marginLeft: width(3),
  },
  overlayTextContainer2: {
    width: width(65),
    position: 'absolute',
    bottom: height(25),
    marginLeft: width(5),
  },
  overlayTextDescr: {
    color: AppColors.white,
    fontWeight: '500',
    fontSize: width(4),
  },
  btn: {
    width: '60%',
    paddingVertical: height(1.2),
    marginTop: height(2),
  },
  arrowDown: {
    width: width(15),
    position: 'absolute',
    left: Platform.OS == 'android' ? width(72) : width(70),
    bottom: Platform.OS == 'android' ? height(15) : height(18),
  },
  arrowDown2: {
    width: width(15),
    position: 'absolute',
    left: Platform.OS == 'android' ? width(72) : width(75),
    bottom: Platform.OS == 'android' ? height(15) : height(18),
  },
  bgFooter: {
    backgroundColor: AppColors.white,
    paddingBottom: Platform.OS == 'ios' ? height(2) : 0,
  },
  flashMessage: {
    backgroundColor: AppColors.white,
    paddingVertical: height(1.5),
    borderRadius: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(5),
    marginTop: Platform.OS == 'android' ? 0 : height(5),
  },
  flashText: {
    color: AppColors.black,
    fontWeight: '300',
  },
  tick: {
    width: width(7),
    marginRight: width(3),
  },
  hole1: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    zIndex: 7,
  },
  
});
export default styles;
