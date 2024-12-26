import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const handlePress = (service) => {
    Alert.alert(`Dialing ${service}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Police: 100')}>
        <Text style={styles.buttonText}>🚔 Call Police</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Ambulance: 101')}>
        <Text style={styles.buttonText}>🚑 Call Ambulance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Fire Department: 102')}>
        <Text style={styles.buttonText}>🚒 Call Fire Department</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
