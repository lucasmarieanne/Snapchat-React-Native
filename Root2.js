import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Écran Accueil
class AccueilScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenue sur l'écran d'accueil !</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Profil')}
        >
          <Text style={styles.buttonText}>Voir mon profil</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Écran Profil
class ProfilScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ceci est votre profil.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Accueil')}
        >
          <Text style={styles.buttonText}>Retour à l'accueil</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Configuration de la navigation
const AppNavigator = createStackNavigator(
  {
    Accueil: {
      screen: AccueilScreen,
      navigationOptions: {
        title: 'Accueil',
      },
    },
    Profil: {
      screen: ProfilScreen,
      navigationOptions: {
        title: 'Profil',
      },
    },
  },
  {
    initialRouteName: 'Accueil',
  }
);

const AppContainer = createAppContainer(AppNavigator);

// App principale
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});