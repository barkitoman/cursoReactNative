import React from 'react'
import { View, Text } from 'react-native'

const DetailList = ({ route }) => {
   
    const { id } = route.params.item
    const { value } = route.params.item
    return (<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         <Text>{id}</Text>
         <Text>{value}</Text>
    </View>)
}

export default DetailList