import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Logo = ({company, slogan}) => {
    return (
        <View style={styles.logo}>
          
          <View>
            <Text style={styles.tittle}>{company}</Text>
            <Text style={styles.subtitle}>{slogan}</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
    },
    tittle: {
      fontSize: 40,
      color: 'white',
      fontStyle: "italic",
      
    },
    subtitle: {
      fontSize: 16,
      color: 'white',
      fontStyle: "italic",
      marginBottom:'25%'
    }
  });

  export default Logo