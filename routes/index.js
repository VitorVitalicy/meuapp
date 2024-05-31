import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Clients from '../pages/home'
import Login from '../pages/login'
import Assets from '../pages/action'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />  

            <Stack.Screen 
                name="Clients"
                component={Clients}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Assets"
                component={Assets}
                options={{
                    headerShown: false
                }}
            />
       </Stack.Navigator>
    )
}