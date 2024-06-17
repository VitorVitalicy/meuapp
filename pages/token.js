import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

//local files:
import api from "../scripts/api";
import url from "../docs/url_requisition";
import LogoBT from "../components/LogoBT";


export default function AuthorizationToken(){

    const navigation = useNavigation()

    useEffect(() =>{
        const signIn = async () => {
            const token = await AsyncStorage.getItem('token')
            console.log(`Valor do Token antes do refresh: ${token}`)

            if(token){
                try{
                    const response = await api.post(url.REFRESH, null, {
                        headers:{
                            "Accept" : "application/json",
                            "Authorization" : `Bearer ${token}`
                        }
                    })
                    console.log("Valor do token depois do refresh: "+response.data.token)
                    AsyncStorage.setItem('token', response.data.token)
                    navigation.navigate('Clients')
                }catch(err){
                    navigation.navigate('Login')
                    console.log(`Erro ao conectar com servidor: ${err}`)
                }
            }else{
                console.log("token inexistente")
                navigation.navigate('Login')
            }
        }
        signIn()
    }, [])

    return <LogoBT />
}