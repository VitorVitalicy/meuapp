import api from '../scripts/api'
import url from "../docs/url_requisition";
import AsyncStorage from '@react-native-async-storage/async-storage';


function NotEmptyLogin(user, pass){
    const response = {user:'', pass:'', status:false}
    if(user==''){
        response.user = "Nome de usuário vazio" 
    }else if(pass==''){
        response.pass = "Senha vazia" 
    }else{
        console.log(user)
        console.log(pass)
        response.status = true
    }
    return response
}

async function login(user, pass){
    try {
        const response = await api.post(url.LOGIN,{
            "email":user,
            "password":pass
            },{
                headers:{
                    "Accept": "application/json"
                    }
            });

        const {token} = response.data
        console.log(token)
        console.log(typeof token)


        if(token){
            await AsyncStorage.setItem('token', token)
            console.log('Login realizado com sucesso!');
            //setIsHidden(true)
        }
        
        
        //token = await AsyncStorage.getItem('token')
        //console.log('Valor do token lido pela storeData: ' + token + '. Do tipo: '+ typeof token)
        
        await AsyncStorage.setItem('user', user)
        const value  = await AsyncStorage.getItem('user')
        console.log('Valor de usuário lido pela storeData: ' + value + '. Do tipo: '+ typeof value)
        return true
        
    }catch(error) {
        if (error.response) {
            // A requisição foi feita e o servidor respondeu com um código de status
            // que sai do alcance de 2xx
            console.log(`1-Dados: ${error.response.data.error}`);
            console.log(`2-status: ${error.response.status}`);
            console.log(`3-headers: ${error.response.headers}`);
          } else if (error.request) {
            // A requisição foi feita mas nenhuma resposta foi recebida
            // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
            // http.ClientRequest no node.js
            console.log(`4-Request: ${error.request}`);
          } else {
            // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
            console.log(`5-Erro: ${error.message}`);
          }
          console.log(`6-Config ${error.config}`);
          console.log(`7-error ${error}`);
          return false
        }
  };

  export {NotEmptyLogin, login}