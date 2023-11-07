import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    color: AppColors.black,
    fontSize: width(3.5),
    maxWidth: width(80),
    textAlign: 'center'
  },
  logo: {
    height: height(13),
    width: height(13),
    marginBottom: height(5.5),
    marginTop: height(16),

  },
  back: {
    marginLeft: width(5),
    marginTop: height(3),
    alignSelf: 'flex-start'
  },
  bottomButtons: {
    justifyContent: 'space-between',
    marginTop: height(7)
  },
  marginBottom: {
    marginBottom: height(1.5)
  },
  btmText: {
    fontSize: width(3.3)
  }
});
export default styles;
