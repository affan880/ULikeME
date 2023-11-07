import { Br, Select } from '~components';
import ScreenNames from '~routes/routes';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Account = ({userInfo, navigation}) => {
  return (
    <View style={styles.accountContainer}>
      <Select
        label={'Cell phone number'}
        defaultValue={'None'}
        value={userInfo?.cellNo}
        onPress={() => navigation.navigate(ScreenNames.PhoneNumberScreen)}
      />
      <Br />
      <Select
        label={'Connected accounts'}
        defaultValue={'None'}
        value={userInfo?.connectedAccounts}
        onPress={() =>
          navigation.navigate(ScreenNames.ConnectedAccountsScreen)
        }
      />
      <Br />
      <Select
        label={'Email address'}
        defaultValue={'None'}
        value={userInfo?.email}
        onPress={() => navigation.navigate(ScreenNames.EmailVerificationScreen)}
      />
      <Br />
      <Select
        label={'User name'}
        defaultValue={'None'}
        value={userInfo?.username}
        onPress={() => navigation.navigate(ScreenNames.NameEditScreen)}
      />
      <Br />
      <Select
        label={'Verification'}
        defaultValue={'None'}
        value={userInfo?.isVerified}
        onPress={() => navigation.navigate(ScreenNames.VerificationScreen)}
      />
      <Br />
      <Text style={styles.descr}>
        Verify account number and email address to help secure your account
      </Text>
    </View>
  );
};

export default Account;
