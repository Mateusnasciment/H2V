import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

/* A component that is being called from the `components` folder. */
   /* The text that will be displayed on the button. */
export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>H2v</Header>
      <Paragraph>
      Integradora IA
        Acelerando a transição energética global com hidrogênio verde
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
