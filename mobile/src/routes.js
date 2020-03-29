import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Posts from './pages/Posts';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}} >
                <AppStack.Screen name = "Posts" component = {Posts}/>
                <AppStack.Screen name = "Detail" component = {Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}