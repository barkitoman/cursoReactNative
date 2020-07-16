import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
// import { ScrollView, FlatList } from 'react-native-gesture-handler'
// import { Button } from 'react-native-elements';
// import CardItem from '../components/CardItem'
// import Email from '../components/Email'
// import Password from '../components/Password'
// import Document from '../components/Document'
// import DocumentType from '../components/DocumentType'
// import Phone from '../components/Phone'
import Logo from '../components/Logo';
import { Input, Button, Icon } from 'react-native-elements';
import { colors } from '../styles/theme';



const Register = ({ navigation }) => {
    const [document, setDocument] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const onPressButton = () => {
        navigation.navigate('Login')
    }
    const onPressButton1 = () => {
        navigation.navigate('Post')
    }

    return (
        <View style={styles.container}>
            <View style={{position:'absolute', left:15, top:40}}>
                <Icon
                name='arrow-left'
                type='font-awesome'
                onPress={()=>{navigation.goBack()}}
                color={colors.white}/>
            </View>
            <Logo company='Gestion Verde' slogan='Gestión de asociaciones canábicas'/>
            <Input
            placeholder='Numero de documento'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
           
            />
           
           <Input
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                leftIconContainerStyle= {{marginLeft:5}}
                placeholder={"Email"}
            />
            <Input
                placeholder='password'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                leftIconContainerStyle= {{marginLeft:5}}
            />
                <Button
                    title='Registrar'
                    onPress={onPressButton1}
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