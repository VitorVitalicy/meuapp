import React ,{useState} from "react";
import {View, 
        Text,  
        TouchableOpacity,
        TextInput,
        StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

//Local Files:
import styles from '../styles';
import { NotEmptyLogin, login } from "../scripts/loginActions";


//Icons:
import { Entypo } from '@expo/vector-icons';
import LogoBT from "../components/LogoBT";

//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);


function Login(){

    const navigation =  useNavigation()

    const [getUser, setUser] = useState('')
    const [getPass, setPass] = useState('')
    const [secureText, setSecureText] = useState(true)
    const [placeholderUser, setPlaceholderUser] = useState('Digite seu nome de usuário...')
    const [placeholderPass, setPlaceholderPass] = useState('Digite sua senha...')
    //const [getLoginColorUser, setLoginColorUser] = useState('')
    //const [getLoginColorPass, setLoginColorPass] = useState('')

    const [isHidden, setIsHidden] = useState(true)

    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <LogoBT />

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} > 
                <Text style={styles.title}>
                    Usuário
                </Text>
                <TextInput 
                  style={styles.input} 
                  placeholder={placeholderUser}
                  //placeholderTextColor={getLoginColorUser}
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
                      //placeholderTextColor={getLoginColorPass}
                      name="password"
                      onChangeText={newPass=>setPass(newPass)}/>
                    <TouchableOpacity
                      style={styles.toggleButton}
                      onPress={() => setSecureText(!secureText)}>
                        <Entypo 
                          style={{borderBottomWidth:1, top:'20%'}}
                          name={secureText ? "eye-with-line" : "eye"} 
                          size={30} 
                          color="black" />
                    </TouchableOpacity>
                </View>

                <Text style={isHidden ? styles.hiddenText : styles.visibleText}>Login Inválido</Text>

                <TouchableOpacity 
                  style={styles.buttonEnter}
                  onPress={()=>{
                    if(NotEmptyLogin(getUser, getPass).status){
                      if (login(getUser, getPass)){
                        console.log("teste")
                        navigation.navigate("Clients")
                        setIsHidden(true)
                        }
                    }else{
                        setPlaceholderUser(NotEmptyLogin(getUser, getPass).user)
                        setPlaceholderPass(NotEmptyLogin(getUser, getPass).pass)
                    }
                  }}>
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