import React from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AppLogo from '~assets/images/appLogo.png';
import { Button, ScreenWrapper } from '~components';
import ScreenNames from '~routes/routes';
import styles from './styles';
export default function Landing({ navigation, route }) {
    const dispatch = useDispatch()
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image source={AppLogo} style={styles.logo} resizeMode="contain" />
                <Text style={styles.title}>When you select Create Account or Sign In, you agree to our Terms. Find out how we process your data in our Privacy Policy and Cookies Policy.</Text>
                <View style={styles.bottomButtons}>
                    <Button containerStyle={styles.topBtn} title={'Sign Up'} onPress={() => navigation.navigate(ScreenNames.PhoneNumberScreen)} />
                    <Button
                        type='secondary'
                        title={'Login'}
                        onPress={() => navigation.navigate(ScreenNames.SignInScreen)} />
                </View>
                <Text style={styles.btmText}>Do you have problems loggin in?</Text>
            </View>
        </ScreenWrapper>
    );
}
