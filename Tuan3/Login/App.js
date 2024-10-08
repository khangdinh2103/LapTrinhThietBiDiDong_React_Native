import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [login, setlogin] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <Image source={require('./assets/usb.png')} />
        <TextInput 
          style={styles.input}
          placeholder="Name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
              alert('Login Success');
          }}>
        <Text id='login' style={styles.buttonText}>LOGIN</Text>
        
          
        
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700', // Màu nền vàng
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '80%',
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountText: {
    color: '#000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
