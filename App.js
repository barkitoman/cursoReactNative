
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import AppContainer from './src/components/core/AppContainer';
import { theme } from './src/styles/theme';

import firebase from 'firebase'
import { firebaseConfig } from './src/firebase/config';

firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
  <View style={{flex:1}}>
    <ThemeProvider theme={theme}>
      <AppContainer></AppContainer>
    </ThemeProvider>
  </View>
  )
}
/*headerMode="none"*/