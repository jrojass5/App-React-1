import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Octicons,Entypo,FontAwesome6} from '@expo/vector-icons';
import ProfileScreen from './Calendar';
import HomeScreen from  './Home';
import MenuScreen from  './Menu';
import VideoScreen from './Feed';
const Tab = createBottomTabNavigator();
export default function MyTabs() {
  
  return (
    <NavigationContainer>
        <Tab.Navigator > 
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <Entypo name="home" color={color} size={size}/>
          ),
          tabBarBadge:12,
          headerShown:false,
        }} />
           <Tab.Screen name="Video" component={VideoScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <Octicons name="video" color={color} size={size}/>
          ),
          tabBarBadge:1,
          headerShown:false,
        }} />
        <Tab.Screen name="calendar" component={ProfileScreen}
        options={{
        
          tabBarIcon:({color,size})=>(
            <Octicons name="calendar" color={color} size={size}/>
          ),
          tabBarBadge:23,
          headerShown:false,
        }} />
       
         <Tab.Screen name="Options" component={MenuScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <FontAwesome6 name="bars" color={color} size={size}/>
          ),
          tabBarBadge:1,
          headerShown:false,
        }} />
      
        </Tab.Navigator>
    </NavigationContainer>  
  );
}