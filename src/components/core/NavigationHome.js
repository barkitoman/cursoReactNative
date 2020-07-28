import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Post from '../../screens/Post'
import Description from '../../screens/Description'
import { SideMenu } from '../SideMenu'

const Drawer = createDrawerNavigator()

const NavigatorHome = () => {
    return (
        <Drawer.Navigator 
        drawerType = "front"
        drawerContent={(props) => <SideMenu {...props} />}
        >

            <Drawer.Screen name="Home" component={Post}/>
            {/* <Drawer.Screen name="Description" component={Description}/> */}
            
        </Drawer.Navigator>
    )
}

export default NavigatorHome