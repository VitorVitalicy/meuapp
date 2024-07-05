import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'
import { SQLiteProvider } from 'expo-sqlite';
import initializeDatabase from './database/initializeDataBase';
import initDataBase from './database/initDataBase'

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#3388aa" barStyle="light-content"/>
      <SQLiteProvider databaseName='vistoriaBontempo.db' onInit={initDataBase}>
        <Routes />  
      </SQLiteProvider>
    </NavigationContainer>
  )
}




























/* 
let name = "André"

const MyName = props =>{
  return(
    <View>
      <Text> My name is {props.name}</Text>
    </View>
  )
}

const ThemeButton = props => {
  const [getTheme, setTheme] = useState(true)
  return(
    <Button
      onPress={() => {
        setTheme(!getTheme)
      }}
      title = {getTheme ? 'Escuro' : 'Claro'}
    />
  )
}

function defaultNameUser(){
  number = () => {Math.floor(Math.random()*1000)}
  return 'User' + number
}

function App() {
  const [getText, setText] = useState('')
  return (
    <View style={{padding: 10}}>
      <StatusBar hidden={true} />
      
      <Text>Bom dia!!</Text>
      <MyName name="Vitor"/>
      <ThemeButton />

      <TextInput 
        placeholder='Digite seu login aqui' 
        style={{height: 40}}
        onChangeText={newText => {
          if (newText.length < 8){
            setText('Necessário pelo menos 8 caracteres...')
          }else{
            setText('Login Compatível')
          }
        }}
        defaultValue={''}
        />
        <Text>{getText}</Text>
    </View>

  )
}

export default App;
*/

