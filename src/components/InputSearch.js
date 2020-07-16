import React, { useState } from 'react'
import { Input, Icon } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import { colors } from '../styles/theme'

const InputSearch = ({onChange}) => {
    const [val, setVal] = useState('')

    const clearInput = () => {
        setVal('')   
        onChange('')
    }

    const onChangeText = (value)=>{
        setVal(value)
        onChange(value)
    }

    return (<View style={styles.container}>
        <Input placeholder="Filter"
            rightIcon = {
                <Icon name={val.length > 0 ? 'close' : 'search'}
                type="evilicon"
                color= { colors.red}
                onPress={()=>{
                    clearInput()
                }}
                ></Icon>
                
            }
            autoCorrect={false}
            onChangeText={onChangeText}
            value={val}
        >
        
        </Input>
    </View>)
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.red
    }
})

export default InputSearch