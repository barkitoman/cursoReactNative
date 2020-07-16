import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

const Phone =({phone, setPhone})=>{
    return (
        <Input
          placeholder='Telefono'
          leftIcon={{ type: 'font-awesome', name: 'phone' }}
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

export default Phone