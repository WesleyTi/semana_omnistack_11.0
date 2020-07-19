import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen} from 'react-native-screens';
import Incidents from './pages/incidents';
import Detail from './pages/detail';



const AppStack = createStackNavigator();
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Incidents" component={Incidents}/>
            <AppStack.Screen name="Detail" component={Detail}/>
        </AppStack.Navigator>
    </NavigationContainer>
export default function Routes() { 

}