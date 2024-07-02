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
import {Client} from "../components/Client";
import { useClientDB, ClientDB } from "../database/useClientDB";

//Icons:
import { Feather } from '@expo/vector-icons';
import api from "../scripts/api";
import url from "../docs/url_requisition";

function Clients(){
    
    const navigation = useNavigation();

    const [id_bontempo, setId_bontempo] = useState("")
    const [nome_cliente, setNome_cliente] = useState("")
    const [contrato, setContrato] = useState("")
    const [projetista, setProjetista] = useState("")
    const [search, setSearch] = useState("")
    const [nameClient, SetNameClient] = useState<ClientDB[]>([])


  // REQUISIÇÃO AO SERVIDOR:
    useEffect(()=>{
      const getClientsInfo = async () =>{
        const token = await AsyncStorage.getItem('token')
        try{
          console.log("Token antes do GET"+token)
          const response = await api.get(url.SALES,{
            params:{
              "search" : search
            }, 
            headers:{
              "Accept" : "application/json",
              "Authorization" : `Bearer ${token}`
            }
          }
          );

          console.log("Resposta da Operação GET: "+response.data)
          remove()
          insert(response.data)
        }catch(err){
          console.log(`Erro na opreção GET: ${err.message}`)
        }
      }
      getClientsInfo()
    }, [search])

  // INTERGAÇÃO COM O SQLite:
    const clientDB = useClientDB()

    
    async function insert(responseByGet){
      try{
        for (let obj of responseByGet){
          // if(isNaN(Number(id_bontempo)) || isNaN(Number(contrato))){
          //   return Alert.alert("Formato Inválido", "Valores de id_bontempo e contrato não são números...")
          // }

          const response = await clientDB.create({
            id_bontempo: obj.id, 
            nome_cliente: obj.nome_cliente, 
            contrato: obj.n_contrato, 
            projetista: obj.consultor}
          )
          console.log(`Produto cadastrado com ID ${response.insertedRowId}`)
        }
        list()
      }catch(err){
        console.log(`Erro BD: ${err}`)
      }
    }

    async function remove(){
      try {
        await clientDB.remove()
        console.log("Remoção completa")
      } catch (error) {
        console.log(`Erro ao remover: ${error}`)
      }
    }

    async function list(){
      try{
        const response = await clientDB.searchByName(search)
        SetNameClient(response)
      }catch(err){
        console.log(`Erro de listagem: ${err}`)
      }
    }


  
  // useEffect(()=>{
  //     list()
  //   },[search])

  // SAIR DO APLICATIVO:
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Sair", "Você deseja sair do aplicativo?", [{
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
                <TextInput 
                  style={[styles.search, {flex:1}]} 
                  placeholder="Pesquisar" 
                  onChangeText={setSearch} 
                  value={search}
                />
            </View>

            <Radio
              leftName="Todos"
              rightName="Recentes"
            />

            
            <FlatList 
            data={nameClient} 
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Client data={item}/>}
            contentContainerStyle={{gap: 30}}
            />
            
        </SafeAreaView>

    )
}

export default Clients;