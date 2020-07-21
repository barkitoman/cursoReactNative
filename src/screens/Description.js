import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Input, Button, Icon, Header } from 'react-native-elements';
import { colors } from '../styles/theme';

const Description = ({ route, navigation }) => {

    const { value } = route.params.item;
    const text1 = useState('Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
    const [name, setName] = useState('Jonathan López');
    const [email, setEmail] = useState('jonlopez@keralty.com');
    const [phone, setPhone] = useState('7353000 ');
    const [webside, setWeb] = useState('web.com');


    const MyCustomLeftComponent = () => {
        return (
            <View >
                <Icon
                    name='chevron-left'
                    type="evilicon"
                    onPress={() => { navigation.goBack() }}
                    color={colors.white} />
            </View>
        )
    }

    const MyCustomrightComponent = () => {
        return (
            <View >
                <Icon
                    name='star'
                    type="evilicon"
                    onPress={() => { navigation.goBack() }}
                    color={colors.white} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    backgroundColor: 'green',
                    justifyContent: 'space-around',
                }}
                leftComponent={MyCustomLeftComponent}
                rightComponent={MyCustomrightComponent}
            />
            <Text style={styles.titleText}>Description</Text>
            <Text style={styles.titleText1}>{text1}</Text>
            <Text style={styles.titleText}>User</Text>
            <View style={styles.twoColumns}>
                <Text style={styles.titleText2}>Name :</Text>
                <Text style={styles.titleText1}>{name}</Text>
            </View>
            <View style={styles.twoColumns}>
                <Text style={styles.titleText2}>Name :</Text>
                <Text style={styles.titleText1}>{name}</Text>
            </View>
            <View style={styles.twoColumns}>
                <Text style={styles.titleText2}>Name :</Text>
                <Text style={styles.titleText1}>{name}</Text>
            </View>
            <View style={styles.twoColumns}>
                <Text style={styles.titleText2}>Name :</Text>
                <Text style={styles.titleText1}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        top: 10,
        fontSize: 30,
        fontWeight: "bold",
        margin: 15,
        alignItems: 'center'

    },
    titleText1: {
        fontSize: 18,
        margin: 15,
        fontWeight: "normal",
        paddingLeft: 10
    },
    twoColumns: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        //padding: 5
    },
    titleText2: {
        fontSize: 18,
        fontWeight: "bold",
        //margin: 5

    }
});



export default Description