import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import {store} from './redux/index';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Routes />
        <FlashMessage position="bottom" icon="auto" />
      </Provider>
    </GestureHandlerRootView>
  );
}
