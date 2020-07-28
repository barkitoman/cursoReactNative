import React from 'react'
import { View , StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Text } from 'react-native-elements';

const ListMovies = ({brandsData, navigation}) => {
    const goToDescription = () => {
        navigation.navigate('Description',{item:item})
    }

    const FlatListItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}/>
        );
    };

    return (
        <View style={{flex:1}}>
            <FlatList
                roundAvatar
                data={brandsData}
                ItemSeparatorComponent={FlatListItemSeparator}
                badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>goToDescription({item})}>
                        <View >
                            <Text style={styles.item}>
                                {item.value}
                            </Text>
                        </View>
                    </TouchableOpacity>
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

export default ListMovies