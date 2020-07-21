import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Logo from '../components/Logo';
import { Input, Button, Icon } from 'react-native-elements';
import { colors } from '../styles/theme';
import {firebase} from '../firebase/config'



const Register = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onRegisterPress  = () => {

        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        //navigation.navigate('Post', {user: data})
                        navigation.navigate('Post')
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', left: 15, top: 40 }}>
                <Icon
                    name='arrow-left'
                    type='font-awesome'
                    onPress={() => { navigation.goBack() }}
                    color={colors.white} />
            </View>
            <Logo company='Gestion Verde' slogan='Gestión de asociaciones canábicas' />
            <Input
                placeholder='Nombre Completo'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={(text) => setFullName(text)}
                value={fullName}
                autoCapitalize="none"
            />

            <Input
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                leftIconContainerStyle={{ marginLeft: 5 }}
                placeholder={"Email"}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Input
                placeholder='Contraseña'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                leftIconContainerStyle={{ marginLeft: 5 }}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <Input
                placeholder='Confirmar contraseña'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                leftIconContainerStyle={{ marginLeft: 5 }}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
            />
            <Button
                title='Registrar'
                onPress={onRegisterPress}
                titleStyle={styles.titleStyleButton}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerStyleButton}
            />


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
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: '5%',
    },
    text: {
        color: 'white',
        paddingTop: 20,
        fontSize: 20
    },
});



export default Register