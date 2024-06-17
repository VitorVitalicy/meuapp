import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

let selected = false;

export default function Radio({leftName, rightName}){
    const [getBackground, setBackground] = useState('white')
    const [getBackground2, setBackground2] = useState('black')

    return(
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
                            {leftName}
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor:getBackground2}]}
                    onPress={() =>{
                        if(selected==true){
                            setBackground('white')
                            setBackground2('black')
                            selected=false
                        }
                    }
                    }>
                        <Text style={styles.text}>
                            {rightName}
                        </Text>
                </TouchableOpacity>
            </View>
    )
};

const styles = StyleSheet.create({
    button:{
        width:'40%',
        borderWidth: 1,
        borderColor: 'black',
        padding:6,
        borderRadius:2
        //backgroundColor:'black'
    },

    text:{
        fontSize:24
    },

    sideBySide:{
        flexDirection:'row',
    }
});
