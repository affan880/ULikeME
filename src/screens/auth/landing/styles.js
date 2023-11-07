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
    marginTop: height(22),

  },
  bottomButtons: {
    justifyContent: 'space-between',
    marginTop: height(10)
  },
  topBtn: {
    marginBottom: height(2)
  },
  btmText: {
    marginTop: height(2),
    fontSize: width(3.3)
  }
});
export default styles;
