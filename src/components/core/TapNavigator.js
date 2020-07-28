import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Post from '../../screens/Post';

const Tab = createMaterialTopTabNavigator();

const TapNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Favorites" component={Post} />
    </Tab.Navigator>
  );
}

export default TapNavigator