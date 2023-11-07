import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
    paddingHorizontal: width(7),
  },
  greyText: {
    color: AppColors.grey,
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: width(75),
    fontWeight: '300',
  },
  sectionTitle: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.purple,
    fontSize: width(4),
  },
  photoContainer: {
    backgroundColor: AppColors.bgGrey3,
    height: width(33),
    width: width(33),
    borderRadius: width(16.5),
    marginBottom: height(3),
    alignSelf: 'center',
    marginTop: height(3),
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
  selfieBtn: {
    width: width(75),
    marginTop: height(1.7),
  },
  row: {
    flexDirection: 'row',
    paddingVertical: height(1.5),
    marginTop: height(4),
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple,
  },
  codeText: {
    color: AppColors.greyText,
    fontSize: width(3.7),
    fontFamily: Fonts.MontsMedium,
  },
  phoneNumberInput: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.darkPurple,
    flex: 1,
    marginLeft: width(3),
    color: AppColors.greyText,
    fontSize: width(3.7),
    fontFamily: Fonts.MontsMedium,
  },
  insta: {
    width: width(8),
    height: height(2.8),
    marginLeft: width(2.5),
  },
});
export default styles;
