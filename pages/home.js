import React, { useState } from "react";
import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


//Local Files:
import styles from '../styles';
import PopUp from "../scripts/popUp";


//Icons:
import { Feather } from '@expo/vector-icons';


const clientsList = [{name:'João'}, {name:'Maria'}, {name:'jorge'}, {name:'fred'}, {name:'Hugo'}, {name:'Ze'}, {name:'angelo'}, {name:'Zeze'}, {name:'Lulu'}, {name:'marcia'}, {name:'doug'}, {name:'ari'}, {name:'dede'}, {name:'marcio'}]

let selected = false


function Clients(){
    
    const navigation = useNavigation();
    
    const [getBackground, setBackground] = useState('white')
    const [getBackground2, setBackground2] = useState('black')
    
    return(
        <SafeAreaView style={styles.screen}>
            <View style={[styles.sideBySide, styles.Btw, {marginBottom:'4%'}]}>
                <Text style={{fontSize:24}}>
                    Lista de Clientes
                </Text>
                <PopUp />
            </View>

            <View style={[styles.sideBySide, styles.searchContainer, {marginBottom:'6%'}]}>
                <Feather name="search" size={26} color="black" />       
                <TextInput style={[styles.search, {flex:1}]} placeholder="Pesquisar"/>
            </View>

            <View style={[styles.sideBySide, {justifyContent:'center', marginBottom:'6%'}]}>
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor:getBackground}]}
                    onPress={()=>{
                        if(selected==false){
                            setBackground('black');
                            setBackground2('white');
                            selected=true
                        }
                    }}>
                        <Text style={styles.text}>
                            Recentes
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor:getBackground2}]}
                    onPress={() =>{
                        if(selected==true){
                            setBackground2('black')
                            setBackground('white')
                            selected=false
                        }
                    }
                    }>
                        <Text style={styles.text}>
                            Todos
                        </Text>
                </TouchableOpacity>
            </View>

            
            <FlatList 
            style={{marginTop: StatusBar.currentHeight || 0}}
                data={clientsList} 
                renderItem={
                    ({item}) => 
                    <TouchableOpacity 
                      style={styles.profile}
                      onPress={() => navigation.navigate('Assets')}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                } 
            />
            
        </SafeAreaView>

    )
}

export default Clients;