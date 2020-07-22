import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import FormLogin from './FormLogin';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../styles/theme';
import firebase from 'firebase'
import 'firebase/firestore'

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user,'ututu')
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            console.log("persiste")
            navigation.navigate('Home')
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.")
              return;
            }
            const user = firestoreDocument.data()
            navigation.navigate('Home')
          })
          .catch(error => {
            alert(error, 'eerrr')
          });
      })
      .catch(error => {
        alert(error, 'eerrr111')
      })
  }

  const goToRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <Logo company='Gestion Verde' slogan='Gestión de asociaciones canábicas' />
      <FormLogin onPressButton={onLoginPress} credentials={{ email, password, setPassword, setEmail }}></FormLogin>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>No tienes cuenta?</Text>
        <TouchableOpacity onPress={goToRegister} style={{ marginTop: 19, marginLeft: 5 }}>
          <Text style={{ color: colors.yellow, fontSize: 20 }}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  containerStyleButton: {
    marginTop: 12,
    color: 'black',
    borderRadius: 25,
  },
  buttonStyle: {
    backgroundColor: 'white',
  },
  titleStyleButton: {
    color: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingBottom: 10
  },
  text: {
    color: 'white',
    paddingTop: 20,
    fontSize: 20
  }
});

export default Login