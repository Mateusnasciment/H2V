import React from 'react'
import { ActivityIndicator } from 'react-native'
import firebase from 'firebase/app'
import Background from '../components/Background'
import { theme } from '../core/theme'

export default function AuthLoadingScreen({ navigation }) {
  firebase.auth().onAuthStateChanged((user) => {
   /* Checking if the user is logged in or not. If the user is logged in, it will navigate to the
   Dashboard screen. If the user is not logged in, it will navigate to the StartScreen. */
    if (user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    } else {
   /* Resetting the navigation stack to the StartScreen. */
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
    }
  })

/* Returning the background and the activity indicator. */
  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  )
}
