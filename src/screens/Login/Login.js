import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import FormLogin from './FormLogin';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../styles/theme';

const Login = ({ navigation }) =>{
    
  
    const changeEmail = (text) => {
      console.log('inputField', text);
      setEmail(text);
    }

    const onPressButton = () => {
      navigation.navigate('Post')
    }
  
    const goToRegister = () => {
      navigation.navigate('Register')
    }

    return (
      <View style={styles.container}>
        <Logo company='Gestion Verde' slogan='Gestión de asociaciones canábicas'/>
        <FormLogin onPressButton={onPressButton}></FormLogin>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'ce'}}>
          <Text style={styles.text}>No tienes cuenta?</Text>
          <TouchableOpacity onPress={goToRegister} style={{marginTop:19, marginLeft: 5 }}>
            <Text style={{color:colors.yellow, fontSize:20}}>Registrate</Text>
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
        paddingBottom:10
    },
    text: {
        color: 'white',
        paddingTop: 20,
        fontSize: 20
    }
});

export default Login