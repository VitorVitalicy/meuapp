import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Clients from '../pages/home'
import Login from '../pages/login'
import Assets from '../pages/action'
import AuthorizationToken from "../pages/token";
import Intro from "../pages/actions/intro";
import Obs from "../pages/actions/obs";
import Attachment from "../pages/actions/attachment";

import {RootStackParamList} from "../scripts/navigationProp"

//import { StackRouter } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>();
//Stack.headerShown(false)

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Assets"
                component={Assets}
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
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                    }}
            />

            <Stack.Screen
                name="AuthorizationToken"
                component={AuthorizationToken}
                options={{
                    headerShown: false
                }}
            />
            


            <Stack.Screen 
                name="Intro"
                component={Intro}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Obs"
                component={Obs}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Attachment"
                component={Attachment}
                options={{
                    headerShown: false
                }}
            />

       </Stack.Navigator>
    )
}