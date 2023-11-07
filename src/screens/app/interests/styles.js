import {StyleSheet} from 'react-native';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  back: {
    marginLeft: width(6),
    marginTop: height(3),
  },
  leftHeart: {
    position: 'absolute',
    left: -width(27),
    top: height(6),
  },
  rightHeart: {
    position: 'absolute',
    right: -width(27),
    top: height(12),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: width(90),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: height(2),
  },
  title: {
    fontSize: width(7),
    fontWeight: '500',
    color: AppColors.darkPurple,
    alignSelf: 'center',
    marginTop: height(4),
  },
  subtitle: {
    fontSize: width(3.5),
    fontWeight: '300',
    color: AppColors.greyText,
    alignSelf: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: height(1.5),
    maxWidth: width(75),
  },
  itemContainer: isSelected => ({
    backgroundColor: AppColors.white,
    paddingHorizontal: width(2.5),
    paddingVertical: height(1.2),
    borderWidth: isSelected ? 0.5 : 0,
    borderColor: AppColors.purple,
    borderRadius: width(10),
    marginRight: width(2),
    marginBottom: height(1.5),
  }),
  itemText: {
    color: AppColors.grey,
  },
  sectionTitle: {
    fontFamily: Fonts.MontsSemiBold,
    fontSize: width(4),
    color: AppColors.purple,
    marginLeft: width(8),
    marginTop: height(3),
  },
  line: {
    width: width(80),
    marginTop: height(3),
    height: 0.75,
    backgroundColor: AppColors.darkPurple,
    alignSelf: 'center',
  },
  btn: {
    marginTop: height(3),
    marginBottom: height(5),
  },
});
export default styles;
