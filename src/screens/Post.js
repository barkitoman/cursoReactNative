import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import { Header, SearchBar, Button } from 'react-native-elements'
import CardItem from '../components/CardItem'
import InputSearch from '../components/InputSearch'


const flatListItems = [
    { id: '1', value: 'A' },
    { id: '2', value: 'B' },
    { id: '3', value: 'C' },
    { id: '4', value: 'D' },
    { id: '5', value: 'E' },
    { id: '6', value: 'F' },
    { id: '7', value: 'G' },
    { id: '8', value: 'H' },
    { id: '9', value: 'I' },
    { id: '10', value: 'J' },
    { id: '11', value: 'K' },
    { id: '12', value: 'L' },
    { id: '13', value: 'M' },
    { id: '14', value: 'N' },
    { id: '15', value: 'O' },
    { id: '16', value: 'P' },
    { id: '17', value: 'Q' },
    { id: '18', value: 'R' },
    { id: '19', value: 'S' },
    { id: '20', value: 'T' },
    { id: '21', value: 'U' },
    { id: '22', value: 'V' },
    { id: '23', value: 'W' },
    { id: '24', value: 'X' },
    { id: '25', value: 'Y' },
    { id: '26', value: 'Z' },]



const Post = () => {

    const[text, setText] = useState('');
    const [brandsData, setbrandsData] = useState(flatListItems);

    const FlatListItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}/>
        );
    };
    
    const  onChangeText = (text) => {    
        if(text != ''){
            const newData = flatListItems.filter(item =>{
                const textData = text.toUpperCase()
                const filterDataItem = item.value.toUpperCase();
                return filterDataItem.indexOf(textData) > -1
            })
            console.log('newData', newData)
            setbrandsData(newData)
        }else{
            setbrandsData(flatListItems)
        }
    }

    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    backgroundColor: 'green',
                    justifyContent: 'space-around',
                }}
                rightComponent={{ icon: 'refresh', color: '#fff' }}
                centerComponent={{ text: 'Post', style: { color: '#fff' } }}
            />
            <InputSearch onChange={onChangeText} ></InputSearch>
            <FlatList
                roundAvatar
                
                data={brandsData}
                ItemSeparatorComponent={FlatListItemSeparator}
                badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                renderItem={({ item }) => (
                    <View >
                        <Text style={styles.item}>
                            {item.value}
                        </Text>
                    </View>
                )}

            />
            <Button
                title='Delete all'
                titleStyle={styles.titleStyleButton}
                buttonStyle={styles.buttonStyle}
            />

        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerStyleButton: {
        marginTop: 12,
        color: 'black',
        borderRadius: 25,

    },
    buttonStyle: {
        backgroundColor: 'red',
    },
    titleStyleButton: {
        color: 'white'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default Post


/*<FlatList

                data={courses}
                removeClippedSubviews={false}
                renderItem={({ item, index }) => (
                    <CardItem item={item} key={index}></CardItem>
                )}
                badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}

            />
            */