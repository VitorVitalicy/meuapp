import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Clients from '../pages/home'
import Login from '../pages/login'
import Assets from '../pages/action'
import AuthorizationToken from "../pages/token";

//import { StackRouter } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
//Stack.headerShown(false)

export default function Routes(){
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="AuthorizationToken"
                component={AuthorizationToken}
                options={{
                    headerShown: false
                    }}
            />
            
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