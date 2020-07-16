import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardItem = ({item}) => {
    return (
        <View style={[styles.containerItem,{backgroundColor:item.color}]}>
            <Text style={{fontSize: 20, color:"#000"}}> {item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem:{
        justifyContent:'center',
        alignItems:'center',
        height:150, 
        width: '80%', 
        margin:10, 
        borderRadius:5
    }
})

export default CardItem