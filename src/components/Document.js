import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';



const Document =({doc, setDoc}) => {
    return (
          <Input
            placeholder='Numero de documento'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
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

export default Document