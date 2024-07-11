import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useClientDB } from "../database/useClientDB";
import { Ionicons } from '@expo/vector-icons';

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
                <Ionicons name="arrow-undo-sharp" size={32} color="black" />
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