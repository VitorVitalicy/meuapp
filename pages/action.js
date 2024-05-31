import {react, useState} from "react";
import {View, Text, Pressable, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

//Local files:
import styles from '../styles';

//Icons:
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

let selected = false

function Assets(){

    const [getBackground, setBackground] = useState('white')
    const [getBackground2, setBackground2] = useState('black')

    const navigation = useNavigation()


    return(
        <SafeAreaView style={styles.screen}>
            <TouchableOpacity 
                style={[styles.sideBySide, {alignItems:'center'}]}
                onPress={()=>navigation.navigate('Clients')}>
                    <AntDesign name="left" size={24} color="black" />   
                    <Text style={[styles.text]}>Voltar</Text>
            </TouchableOpacity>

            <View style={{alignItems:'center', marginTop:'10%'}}>
                <View style={[styles.sideBySide, styles.Btw]}>

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
                                    Adicionar
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
                                    Visualizar
                                </Text>
                        </TouchableOpacity>
                </View>

                <ScrollView style={styles.containerOptions}>
                    <Pressable style={[styles.options, styles.sideBySide]}>
                        <MaterialIcons name="camera-alt" size={50} color="black"/>
                        <Text>Camera</Text>
                    </Pressable>
                    <Pressable style={[styles.options, styles.sideBySide]}>
                        <MaterialIcons name="video-camera-back" size={50} color="black"/>
                        <Text>Vídeo</Text>
                    </Pressable>
                    <Pressable style={[styles.options, styles.sideBySide]}>
                        <Foundation name="clipboard-notes" size={50} color="black"/>
                        <Text>Observações</Text>
                    </Pressable>
                    <Pressable style={[styles.options, styles.sideBySide]}>
                        <FontAwesome name="pencil-square-o" size={50} color="black"/>
                        <Text>Observações do Cliente</Text>
                    </Pressable>
                    <Pressable style={[styles.options, styles.sideBySide]}>
                        <Text>Observações do Cliente</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Assets;