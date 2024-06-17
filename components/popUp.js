import React, {useEffect, useState} from "react";
import { 
    TouchableOpacity,
    Modal, 
    View, 
    Text, 
    Alert, 
    StyleSheet, 
    TouchableWithoutFeedback 
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Icons:
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

//import styles from "../styles";
import api from '../scripts/api'
import url from "../docs/url_requisition";

export default function PopUp(){
    
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name:"",
        email:"",
        celular:"",
        cpf:"",

    })

    useEffect( () => {
        const getUserInfo = async () =>{
            const token = await AsyncStorage.getItem('token')
            try{
                const storedUserInfo = await api.post(url.ME, null, {
                    headers:{
                        "Accept" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    }
                })
                console.log(storedUserInfo.data)
                if(storedUserInfo){
                    await AsyncStorage.setItem('name', storedUserInfo.data.name)
                    await AsyncStorage.setItem('email', storedUserInfo.data.email)
                    await AsyncStorage.setItem('celular', storedUserInfo.data.celular)
                    await AsyncStorage.setItem('cpf', storedUserInfo.data.cpf)

                    setUserInfo({
                        name:await AsyncStorage.getItem('name'),
                        email:await AsyncStorage.getItem('email'),
                        celular:await AsyncStorage.getItem('celular'),
                        cpf:await AsyncStorage.getItem('cpf'),
                    })
                }
            }catch(err){
                console.log("Erro ao recuperar dados de usuário: " + err)
            }
        }

        getUserInfo()
    }, [])


    const logout = async() => {
        try{
            const token = await AsyncStorage.getItem('token')
            const response = await api.post(url.LOGOUT, null, {
            headers:{
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }

        })
        console.log(response.data.message)
        }catch(error){
            if (error.response) {
                // A requisição foi feita e o servidor respondeu com um código de status
                // que sai do alcance de 2xx
                console.log(`1p-Dados: ${error.response.data.error}`);
                console.log(`2p-status: ${error.response.status}`);
                console.log(`3p-headers: ${error.response.headers}`);
              } else if (error.request) {
                // A requisição foi feita mas nenhuma resposta foi recebida
                // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
                // http.ClientRequest no node.js
                console.log(`4p-Request: ${error.request}`);
              } else {
                // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
                console.log(`5p-Erro: ${error.message}`);
              }
              console.log(`6p-Config ${error.config}`);
              console.log(`7p-error ${error}`);
        }
    }

    const showAlert = () =>
        Alert.alert(
            'Logout',
            'Deseja mesmo sair?',
            [{
                text: 'Cancelar',
                onPress: () => setVisible(true),
                style: 'cancel',
                },
            {
                text: 'Sair',
                onPress: () => {
                    setVisible(false)
                    logout()
                    navigation.navigate('Login')
                    },
                    style: 'cancel',
                }
            ],
            {cancelable: true}
        )

        

    return(
        <SafeAreaView>
            <TouchableOpacity onPress={()=> setVisible(true)}>
                <Ionicons name="people" size={34} color="black" />
            </TouchableOpacity>

            <Modal
                animationType="slide"  
                transparent={true} 
                visible={visible}
                onRequestClose={() => setVisible(false)}
                >
                <TouchableWithoutFeedback onPress={() => {setVisible(false)}}>

                    <SafeAreaView style={{flex:1}} >

                    <View style={styles.popUp}>
                        <View style={[styles.sideBySide, styles.infoInput ,{alignItems:'center'}]} onPress={ () => {}}>
                            <View style={[{flex:1}, styles.sideBySide]}>
                            <Feather name="user" size={24} color="black" />
                            <Text style={{marginLeft:10}}>{userInfo.name}</Text>
                            </View>
                            <TouchableOpacity>
                                <Octicons name="pencil" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.sideBySide, styles.infoInput ,{alignItems:'center'}]} onPress={ () => {}}>
                        <View style={[{flex:1}, styles.sideBySide]}>
                            <Fontisto name="email" size={24} color="black" />
                            <Text style={{marginLeft:10}}>{userInfo.email}</Text>
                        </View>
                            <TouchableOpacity>
                                <Octicons name="pencil" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.sideBySide, styles.infoInput ,{alignItems:'center'}]} onPress={ () => {}}>
                        <View style={[{flex:1}, styles.sideBySide]}>
                            <FontAwesome name="phone" size={24} color="black" />
                            <Text style={{marginLeft:10}}>{userInfo.celular}</Text>
                        </View>
                            <TouchableOpacity>
                                <Octicons name="pencil" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.sideBySide, styles.infoInput ,{alignItems:'center'}]} onPress={ () => {}}>
                        <View style={[{flex:1}, styles.sideBySide]}>
                            <FontAwesome name="id-card-o" size={24} color="black" />
                            <Text style={{marginLeft:10}}>{userInfo.cpf}</Text>
                        </View>
                            <TouchableOpacity>
                                <Octicons name="pencil" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    
                        <TouchableOpacity 
                            style={[styles.sideBySide, styles.buttonOut]} 
                            onPress={showAlert}>
                                <Feather name="log-out" size={24} color="#fff" />
                                <Text 
                                    style={{color:'#fff', marginLeft:10, fontSize:20}}>
                                        Logout
                                </Text>
                        </TouchableOpacity>
                    </View>  
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    popUp:{
        borderRadius: 8,
        borderColor:'#333',
        borderWidth:1,
        backgroundColor:'white',
        position: "absolute",
        padding:10,
        width:'100%',
        height:'40%',
        bottom: 0
    },

    infoInput:{
        flex:1,
        alignItems:'center', 
        //justifyContent:'center', 
        borderBottomWidth:1,
        padding:'2%'
    },

    buttonOut:{
        marginTop:"8%",
        backgroundColor: '#e40707',
        padding:10,
        width:'100%',
        //marginTop:'5%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    sideBySide:{
        flexDirection:'row',
    }
});
