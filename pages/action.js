import {react, useState} from "react";
import {View, Text, Pressable, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

//Local files:
import PopUp from "../components/popUp";
import styles from '../styles';
import Radio from "../components/radios";
import BackButton from "../components/BackButton";

//Icons:
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

let selected = false

function Assets(){
    const navigation = useNavigation()

    return(
        <SafeAreaView style={styles.screen}>

            <View style={[styles.sideBySide, styles.Btw, {marginBottom:'4%'}]}>
                <BackButton value="Voltar" />
                <PopUp />    
            </View>
            

            <View style={{alignItems:'center', marginTop:'2%'}}>
                
                <Radio 
                  leftName="Adicionar"
                  rightName="Visualizar" 
                />

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