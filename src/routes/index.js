import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getUserAdditionalInfo } from '~backend/firebase';
import { Loader } from '~components';
import { login, logout, selectIsLogin } from '~redux/slices/authSlice';
import { AppointmentPreferenceScreen, InterestsScreen } from '~screens/app';
import { AddPhotosScreen, BirthdayScreen, CodeScreen, EmailScreen, GenderScreen, LandingScreen, NameScreen, PhoneNumberScreen, SexualOrientationScreen, ShowmeScreen, SignInScreen, WelcomeScreen } from '~screens/auth';
import AppColors from '~utills/AppColors';
import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch, useSelector } from 'react-redux';

import BottomTabs from './BottomTab';
import ScreenNames from './routes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const dispatch = useDispatch();
  const info = useSelector((state)=> state.Auth);
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  const isLogin = useSelector(selectIsLogin);

  auth().onAuthStateChanged((user)=>{
    if(user){
      getUserAdditionalInfo().then((userAdditionalInfo)=>{
        dispatch(login({user, userAdditionalInfo}))
      })
    }
    else{
      dispatch(logout({}))
    }
  })
  return (
    <NavigationContainer
      fallback={
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: AppColors.white,
          }}>
          <ActivityIndicator size={'large'} color={AppColors.red} />
        </View>
      }>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.LANDING}
          screenOptions={{header: () => false}}>
          <Stack.Screen name={ScreenNames.LANDING} component={LandingScreen} />
          <Stack.Screen
            name={ScreenNames.SignInScreen}
            component={SignInScreen}
          />
          <Stack.Screen
            name={ScreenNames.PhoneNumberScreen}
            component={PhoneNumberScreen}
          />
          <Stack.Screen name={ScreenNames.CodeScreen} component={CodeScreen} />
          <Stack.Screen
            name={ScreenNames.EmailScreen}
            component={EmailScreen}
          />
          <Stack.Screen
            name={ScreenNames.WelcomeScreen}
            component={WelcomeScreen}
          />
          <Stack.Screen name={ScreenNames.NameScreen} component={NameScreen} />
          <Stack.Screen
            name={ScreenNames.BirthdayScreen}
            component={BirthdayScreen}
          />
          <Stack.Screen
            name={ScreenNames.GenderScreen}
            component={GenderScreen}
          />
          <Stack.Screen
            name={ScreenNames.SexualOrientationScreen}
            component={SexualOrientationScreen}
          />
          <Stack.Screen
            name={ScreenNames.ShowmeScreen}
            component={ShowmeScreen}
          />
          <Stack.Screen
            name={ScreenNames.AppointmentPreferenceScreen}
            component={AppointmentPreferenceScreen}
          />
          <Stack.Screen
            name={ScreenNames.InterestsScreen}
            component={InterestsScreen}
          />
          <Stack.Screen
            name={ScreenNames.AddPhotosScreen}
            component={AddPhotosScreen}
          />
        </Stack.Navigator>
      ) : (
        <BottomTabs />
      )}
    </NavigationContainer>
  );
}
