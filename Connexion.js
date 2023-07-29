import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default function App() {


// ================ recuperation des input  ================

    const [users, setUsers] = useState([]);

    useEffect(() => {
      // getUsers();
    }, []);
// ================ connexion a l'api ================
    const getUsers = async () => {
      await axios.put('https://mysnapchat.epidoc.eu/user', {email: email, password: password})
      .then(function(response) {
        // console.log(response.data.data.token);
        console.log(response.data);
        if (response.data.data.token) {
          alert("vous etes connecter");
        }

      }).catch(function (error) {
        alert("vous etes pas co");
        console.log(error);
      })
    }

// ===== recuperation des input  ======
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxBody}>
        {/* <Image source={require('./assets/snapchat2.png')} style={styles.image} /> */}
        <View style={styles.boxConn}>
          <Text style={styles.text}>Connexion</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />

          <TouchableOpacity style={styles.boutton} onPress={getUsers}>
            <Text style={styles.textBtn}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boxBody: {
    height: 700,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boxConn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    width: 240,
    borderRadius: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  boutton: {
    width: 150,
    color: 'white',
    backgroundColor: '#00b4d8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    margin: 12,
  },
});