import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Post from '../../screens/Post'
import Description from '../../screens/Description'

const Drawer = createDrawerNavigator()

const NavigatorHome = () => {
    return (
        <Drawer.Navigator 
        drawerType = "front"
        >
            <Drawer.Screen name="Post" component={Post}/>
            {/* <Drawer.Screen name="Description" component={Description}/> */}
            
        </Drawer.Navigator>
    )
}

export default NavigatorHome