import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';


const DocumentType =({docType, setDocType})=>{
    return (

        <Input
          placeholder='Tipo de documento'
          leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
          leftIconContainerStyle= {{marginLeft:15}}
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

  export default DocumentType