import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, colors } from 'react-native-elements'
import InputSearch from '../components/InputSearch'
import { DrawerActions } from '@react-navigation/native'
import ListMovies from '../components/ListMovies'
import API from '../utils/Api'

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



const Post = ({navigation}) => {

    const[text, setText] = useState('');
    const [brandsData, setbrandsData] = useState(flatListItems);
    
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

    const openMenu = () => {
        console.log('open')
        navigation.dispatch(DrawerActions.toggleDrawer())
       
    }

    const fetchMovies = async() => {
        try {
            console.log('callFetch')
            let data = await API.movies.getPopularMovies();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    
    useEffect(()=>{
        fetchMovies()
    }, [])

    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    backgroundColor: 'green',
                    justifyContent: 'space-around',
                }}
                leftComponent = {{icon: 'menu', color: '#fff', onPress: ()=>{openMenu()}} }
                
                rightComponent={{ icon: 'refresh', color: '#fff' }}
                centerComponent={{ text: 'Post', style: { color: '#fff' } }}
            />
            <View style={{flexDirection:'row',
             justifyContent:'space-around',
             alignItems:'center',
              marginHorizontal:10, 
              marginTop:10, 
              borderWidth:1, 
              borderColor: "#000", 
              borderRadius: 5, 
              height:40,

              
              }}>
                <View >
                    <TouchableOpacity onPress={()=>ShowListing()}>
                        <Text >
                            Cinema listing
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderRightWidth:1, borderRightColor:"#000", height:40, width:1}}></View>
                <View >
                    <TouchableOpacity onPress={()=>ShowFavorites()}>
                        <Text style={{}}>
                            Favorites
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <InputSearch onChange={onChangeText} ></InputSearch>
            
            <ListMovies brandsData={brandsData} navigation ={navigation}></ListMovies>
            

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