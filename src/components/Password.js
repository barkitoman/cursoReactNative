import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';


const Password =({pwd, setPwd})=>{
    return (
        <Input
          placeholder='password'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          secureTextEntry={true}
          leftIconContainerStyle= {{marginLeft:10}}
          inputContainerStyle={styles.inputStyle}
          />
  );
}

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 25,
    }
  });

export default Password