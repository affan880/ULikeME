import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
import Fonts from '~utills/Fonts';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1.5),
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(2),
  },
  avatar: {
    height: height(7),
    width: height(7),
    borderRadius: height(3.5),
  },
  textContainer: {
    paddingHorizontal: width(3),
    flex: 0.8,
  },
  name: {
    fontFamily: Fonts.MontsSemiBold,
    color: AppColors.darkPurple,
    fontSize: width(4),
  },
  subtitle: {
    color: AppColors.black,
    fontWeight: '300',
    marginTop: height(0.5),
  },
});
export default styles;
