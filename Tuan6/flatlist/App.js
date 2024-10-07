import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';333333333333333

export default function App() {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
      <View style={[styles.input, {   borderWidth: 1, flexDirection: 'row',
    borderRadius: 10}]}>
      <Icon  name="user" style={{paddingRight:}} size={20} color="#A3A3A3" />
        <TextInput 
        
          
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        /></View>
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  centerContainer: {
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  input: {
    height: 40,
    width: 300,               
    margin: 12,

    padding: 10,
  
  },
});
