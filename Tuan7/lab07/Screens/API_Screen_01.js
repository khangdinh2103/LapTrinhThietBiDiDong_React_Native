import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';import { Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function Screen1({ navigation }) {

  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
      <Image source={require('../assets/Image 95.png')}/>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#8353E2', textAlign: 'center'}}>
        MANAGE YOUR {"\n"}TASK
      </Text>

      </View>
      <View style={[styles.input, {   borderWidth: 1, flexDirection: 'row',
    borderRadius: 10}]}>
      <Image source={require('../assets/Frame.png')}/>  
        <TextInput 
        
          
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        /></View>
      
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
      <TouchableOpacity style={{backgroundColor: '#8353E2', padding: 10, borderRadius: 10, width: 150, alignItems: 'center'}}

      onPress={() => {
        navigation.navigate('Screen2');
      }}
      >
        
        <Text style={{color: 'white', fontWeight: 'bold'}}>GET STARTED -> </Text>
      </TouchableOpacity>
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
