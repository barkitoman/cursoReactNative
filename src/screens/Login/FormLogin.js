import React, { useState } from 'react'
import { Input, Button, Text } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

const FormLogin = ({ onPressButton , credentials}) => {
    return (
        
        <React.Fragment>
            <Input
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                leftIconContainerStyle={{ marginLeft: 5 }}
                placeholder={"Email"}
                onChangeText={(text) => credentials.setEmail(text)}
                value={credentials.email}
            />
            <Input
                placeholder='Contraseña'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                leftIconContainerStyle={{ marginLeft: 5 }}
                onChangeText={(text) => credentials.setPassword(text)}
                value={credentials.password}
            />
            <Button title='Log In' onPress={onPressButton} />

            <Text style={styles.text}>Olvidaste la contraseña?</Text>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 25,
    },
    text: {
        color: 'white',
        paddingTop: 20,
        fontSize: 20
    }
});

export default FormLogin

