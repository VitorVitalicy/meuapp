import React, { useState, useEffect } from "react";
import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Modal, Alert, BackHandler} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Local Files:
import styles from '../styles';
import PopUp from "../components/popUp";
import Radio from "../components/radios";
import { useClientDB, ClientDB } from "../database/useClientDB";


//Icons:
import { Feather } from '@expo/vector-icons';
import { SQLiteProvider } from "expo-sqlite";

//Exemplo FlatLIST
const clientsList = [{name:'João'}, {name:'Maria'}, {name:'jorge'}, {name:'fred'}, {name:'Hugo'}, {name:'Ze'}, {name:'angelo'}, {name:'Zeze'}, {name:'Lulu'}, {name:'marcia'}, {name:'doug'}, {name:'ari'}, {name:'dede'}, {name:'marcio'}]

//let selected = false


function Clients(){
    
    const navigation = useNavigation();
    const [idBontempo, setIdBontempo] = useState("54621")
    const [name, setName] = useState("Fulano")
    const [contrate, setContrate] = useState("00001")
    const [designer, setDesigner] = useState("Ciclano")
    const [search, setSearch] = useState("")
    const {clients, setClients} = useState<ClientDB[]>([])




    const clientDB = useClientDB()
    //Chamada da função de criar para injetar valores no Banco de Dados
    async function insert(){
      try{
        if(isNaN(Number(idBontempo)) || isNaN(Number(contrate))){
          return Alert.alert("Formato Inválido", "Valores de id_bontempo e contrato não são números...")
        }
        const response = await clientDB.create(
          {id_bontempo: Number(idBontempo), name, contrate: Number(contrate), designer}
        )
        console.log(`Produto cadastrado com ID ${response.insertedRowId}`)
      }catch(err){
        console.log(`Erro BD: ${err}`)
      }
    }

    async function list(){
      try{
        const response = clientDB.searchByName(search)
        console.log(response)
      }catch(err){
        console.log(`Erro de listagem: ${err}`)
      }
    }

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Sair", "Você deseja sair do aplicativo?", [
            {
              text: "Cancelar",
              onPress: () => null,
              style: "cancel"
            },
            { text: "SIM", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
      
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
      
        return () => backHandler.remove();
      }, []);
      
   
    
    return(
        <SafeAreaView style={styles.screen}>
            <View style={[styles.sideBySide, styles.Btw, {marginBottom:'4%'}]}>
                <Text style={{fontSize:24}}>
                    Lista de Clientes
                </Text>
                <PopUp/>
            </View>

            <View style={[styles.sideBySide, styles.searchContainer, {marginBottom:'6%'}]}>
                <Feather name="search" size={26} color="black" />       
                <TextInput style={[styles.search, {flex:1}]} placeholder="Pesquisar"/>
            </View>

            <Radio
              leftName="Todos"
              rightName="Recentes"
            />

            
            <FlatList 
            style={{marginTop: StatusBar.currentHeight || 0}}
                data={clientsList} 
                renderItem={
                    ({item}) => 
                    <TouchableOpacity 
                      style={styles.profile}
                      onPress={
                        () => {
                          navigation.navigate('Assets')
                          insert()
                          list()
                        }
                        }>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                } 
            />
            
        </SafeAreaView>

    )
}

export default Clients;