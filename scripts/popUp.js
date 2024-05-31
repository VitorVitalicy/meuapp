import React, {useState} from "react";
import { TouchableOpacity, Modal, View, Text, Alert, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

//Icons:
import { Feather } from '@expo/vector-icons';

//import styles from "../styles";


export default function PopUp(){
    
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)

    const showAlert = () =>
        Alert.alert(
            'Logout',
            'Deseja mesmo sair?',
            [{
                text: 'Cancelar',
                onPress: () => setVisible(false),
                style: 'cancel',
                },
            {
                text: 'Sair',
                onPress: () => {
                    setVisible(false)
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
                onRequestClose={() => setVisible(false)}>

                <SafeAreaView style={{flex:1}} >
                <View style={styles.popUp}>
                    <TouchableOpacity style={styles.sideBySide} onPress={ () => {}}>
                        <Feather name="user" size={24} color="black" />
                        <Text>Usuario</Text>
                    </TouchableOpacity>
                
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
            </Modal>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    popUp:{
        borderRadius: 8,
        borderColor:'#333',
        borderWidth:1,
        backgroundColor:'white',
        position: "absolute",
        padding:10,
        width:'100%',
        height:'20%',
        bottom: 0
    },
    buttonOut:{
        backgroundColor: '#ff0000',
        padding:10,
        width:'100%',
        marginTop:'16%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    sideBySide:{
        flexDirection:'row',
    }
})
