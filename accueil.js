import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity, navigation } from 'react-native';

export default function Accueil ({navigation})  {

  return (<SafeAreaView style={styles.container}>

    <View style={styles.containerImg}>
      <Image style={styles.img} source={require('./assets/snapchat.png')}/>
    </View>

    <View style={styles.content}>
      {/* <Text>Snapchat</Text> */}
    </View>

    <View style={styles.containerButton}>

      <TouchableOpacity style={styles.buttonLogIn} 
        onPress={() =>
          navigation.navigate('Connexion')
        }>
        <Text style={styles.textButtonLogIn}>Se connecter</Text>

      </TouchableOpacity>

      <View style={styles.buttonLog}>

        <TouchableOpacity style={styles.boutton}>
              <Text style={styles.textButton}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutton}>
            <Text style={styles.textButton}>Utiliser un autre compte</Text>
        </TouchableOpacity>

      </View>

    </View>

    <StatusBar style="auto" />

  </SafeAreaView>)
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerImg: {
    marginTop: 20,
  },

  img: {
    height: 30,
    width: 30,
  },
  
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },

  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonLogIn: {
    backgroundColor: 'rgb(0, 153, 255)',
    padding: 18,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 50,
  },
  
  textButtonLogIn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 700,
  },

  buttonLog: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: 300,
  },

  textButton: {
    fontWeight: '700',
  },

});
