import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function BackButton({value}){
    const navigation = useNavigation()
    return (
        <TouchableOpacity 
            style={styles.sideBySide}
            onPress={()=>navigation.navigate('Clients')}>
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