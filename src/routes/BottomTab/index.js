import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AgePreferenceScreen,
  AgePreferenceStaticScreen,
  AppointmentPreferenceScreen,
  BenefitsScreen,
  BlockedContactsScreen,
  ChatListScreen,
  ChatScreen,
  ConfigurationScreen,
  ConnectedAccountsScreen,
  EditProfileScreen,
  EmailVerificationScreen,
  HomeScreen,
  InterestsScreen,
  MatchesScreen,
  NameEditScreen,
  ProfesionScreen,
  ProfessionalStaticScreen,
  ProfileScreen,
  StarScreen,
  UserProfileScreen,
  VerificationScreen,
} from '~screens/app';
import ScreenNames from '~routes/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomBottomTab from './CustomBottomTab';
import {
  GenderScreen,
  PhoneNumberScreen,
  SexualOrientationScreen,
  UnderDevelopmentScreen,
} from '~screens/auth';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectBottomTabVisible} from '~redux/slices/configSlice';
import ConnectedAccounts from '~screens/app/connectedAccounts';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME}
      screenOptions={{header: () => false}}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.MatchesScreen}
        component={MatchesScreen}
      />
    </Stack.Navigator>
  );
}
function LikeStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.StarScreen}
      screenOptions={{header: () => false}}>
      <Stack.Screen name={ScreenNames.StarScreen} component={StarScreen} />
    </Stack.Navigator>
  );
}
function ChatStack({navigation, route}) {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.ChatListScreen}
      screenOptions={{header: () => false}}>
      <Stack.Screen
        name={ScreenNames.ChatListScreen}
        component={ChatListScreen}
      />
      <Stack.Screen name={ScreenNames.ChatScreen} component={ChatScreen} />
      <Stack.Screen
        name={ScreenNames.UserProfileScreen}
        component={UserProfileScreen}
      />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.ProfileScreen}
      screenOptions={{header: () => false}}>
      <Stack.Screen
        name={ScreenNames.ProfileScreen}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={ScreenNames.BenefitsScreen}
        component={BenefitsScreen}
      />
      <Stack.Screen
        name={ScreenNames.EditProfileScreen}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name={ScreenNames.SexualOrientationScreen}
        component={SexualOrientationScreen}
      />
      <Stack.Screen name={ScreenNames.GenderScreen} component={GenderScreen} />
      <Stack.Screen
        name={ScreenNames.ProfesionScreen}
        component={ProfesionScreen}
      />
      <Stack.Screen
        name={ScreenNames.AppointmentPreferenceScreen}
        component={AppointmentPreferenceScreen}
      />
      <Stack.Screen
        name={ScreenNames.ProfessionalStaticScreen}
        component={ProfessionalStaticScreen}
      />
      <Stack.Screen
        name={ScreenNames.AgePreferenceScreen}
        component={AgePreferenceStaticScreen}
      />
      <Stack.Screen
        name={ScreenNames.AgePreferenceScreenNonStatic}
        component={AgePreferenceScreen}
      />
      <Stack.Screen
        name={ScreenNames.InterestsScreen}
        component={InterestsScreen}
      />
      <Stack.Screen
        name={ScreenNames.ConfigurationScreen}
        component={ConfigurationScreen}
      />
      <Stack.Screen
        name={ScreenNames.ConnectedAccountsScreen}
        component={ConnectedAccountsScreen}
      />
      <Stack.Screen
        name={ScreenNames.EmailVerificationScreen}
        component={EmailVerificationScreen}
      />
      <Stack.Screen
        name={ScreenNames.NameEditScreen}
        component={NameEditScreen}
      />
      <Stack.Screen
        name={ScreenNames.VerificationScreen}
        component={VerificationScreen}
      />
      <Stack.Screen
        name={ScreenNames.PhoneNumberScreen}
        component={PhoneNumberScreen}
      />
      <Stack.Screen
        name={ScreenNames.BlockedContactsScreen}
        component={BlockedContactsScreen}
      />
    </Stack.Navigator>
  );
}

function BottomTabs(props) {
  const bottomTabVisible = useSelector(selectBottomTabVisible);
  return (
    <Tab.Navigator
      tabBar={props =>
        bottomTabVisible ? <CustomBottomTab {...props} /> : null
      }
      screenOptions={{
        header: () => false,
      }}>
      <Tab.Screen name={ScreenNames.HomeStack} component={HomeStack} />
      <Tab.Screen name={ScreenNames.LikeStack} component={LikeStack} />
      <Tab.Screen name={ScreenNames.ChatStack} component={ChatStack} />
      <Tab.Screen name={ScreenNames.ProfileStack} component={ProfileStack} />
    </Tab.Navigator>
  );
}
export default BottomTabs;
