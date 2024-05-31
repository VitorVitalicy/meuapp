import {react, useState} from "react";
import {View, 
        Text, 
        Image, 
        StyleSheet, 
        TouchableOpacity,
        TextInput,
        StatusBar,
        SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

//Local Files:
import styles from '../styles';

//Icons:
import { Entypo } from '@expo/vector-icons';

//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);



function Login(){
    const navigation = useNavigation();

    const [getUser, setUser] = useState('')
    const [getPass, setPass] = useState('')
    const [secureText, setSecureText] = useState(true)
    const [placeholderUser, setPlaceholderUser] = useState('Digite seu nome de usuário...')
    const [placeholderPass, setPlaceholderPass] = useState('Digite sua senha...')
    const [getLoginColorUser, setLoginColorUser] = useState('')
    const [getLoginColorPass, setLoginColorPass] = useState('')

    function NotEmptyLogin(userValue, passValue){
        if(userValue==''){
            setPlaceholderUser('Nome de usuário vazio') 
            setLoginColorUser('red')
        }else if(passValue==''){
            setPlaceholderPass('Senha está vazia') 
            setLoginColorPass('red')
        }
        else{
            navigation.navigate('Clients')
            console.log(getUser)
            console.log(getPass)
        }
    }


    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../midia/logo4BT.png')}
                    style={{width:'100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} > 

                <Text style={styles.title}>
                    Usuário
                </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={placeholderUser}
                    placeholderTextColor={getLoginColorUser}
                    value={getUser}
                    onChangeText={newUser=>setUser(newUser)}
                />

                <Text style={styles.title}>
                    Senha
                </Text>

                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={[styles.input, {flex:1}]} 
                        secureTextEntry={secureText}
                        placeholder={placeholderPass}
                        placeholderTextColor={getLoginColorPass}
                        name="password"
                        onChangeText={newPass=>setPass(newPass)}
                    />
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setSecureText(!secureText)}
                    >
                        <Entypo 
                            style={{borderBottomWidth:1, top:'20%'}}
                            name={secureText ? "eye-with-line" : "eye"} 
                            size={30} 
                            color="black" />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity 
                    style={styles.buttonEnter}
                    onPress={()=>{
                        NotEmptyLogin(getUser, getPass);
                    }}
                >
                    <Text style={styles.buttonText}>Fazer Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.forgotPass}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                
            </Animatable.View>
        </View>
    )
}

export default Login;