import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [login, setLogin] = useState('');

  const handleLogin = () => {
    setLogin('Đang đăng nhập...');
    setTimeout(() => {
      setLogin('');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" />
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
        onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {login ? <Text style={styles.statusText}>{login}</Text> : null}

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
    backgroundColor: '#FFD700',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
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
  statusText: {
    color: '#FF0000',
    fontSize: 16,
    marginBottom: 15,
  },
});

export default LoginScreen;
