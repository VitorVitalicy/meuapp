import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useClientDB } from "../database/useClientDB";

export default function BackButton({value, page}){

    const navigation = useNavigation()
    const clientDB = useClientDB()

    async function remove(){
        try {
            await clientDB.remove()
            console.log("Remoção completa")
        } catch (error) {
            console.log(`Erro ao remover: ${error}`)
        }
    }


    return (
        <TouchableOpacity 
            style={styles.sideBySide}
            onPress={()=>{
                remove()
                navigation.navigate(page)
            }}>
                <AntDesign name="left" size={24} color="black" />   
                <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    sideBySide:{
        flexDirection:'row',
        alignItems:'center'
    },

    text:{
        fontSize:24
    }

});