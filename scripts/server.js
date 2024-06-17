import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      setMessage('Login realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro de autenticação', 'Usuário ou senha incorretos');
    }
  };

  const accessProtectedRoute = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/protected', {
        headers: { Authorization: token },
      });
      setMessage(response.data.message);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível acessar a rota protegida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Autenticação com JWT</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={login} />
      <Button title="Acessar Rota Protegida" onPress={accessProtectedRoute} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default App;
