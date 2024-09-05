import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function A() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle13} />

      <Text style={styles.txtRegister}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Image style={styles.avatarUser} source={require('./assets/vectors/AvatarUser1_x2.png')} />
        <TextInput
          style={styles.txtPassword}
          placeholder="Name"
        />
      </View>

      <View style={styles.inputContainer2}>
        <View style={styles.passwordContainer}>
          <Image style={styles.icon} source={require('./assets/vectors/Group3_x2.png')} />
          <TextInput
            style={styles.txtPassword1}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <Image style={styles.eyeIcon} source={require('./assets/vectors/Group2_x2.png')} />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  rectangle13: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FBCB00',
    height: '100%',
  },
  txtRegister: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginBottom: 75,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    padding: 10,
    marginBottom: 20,
  },
  avatarUser: {
    width: 32,
    height: 32,
  },
  txtPassword: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  inputContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    padding: 10,
    marginBottom: 59,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 17,
  },
  txtPassword1: {
    fontSize: 18,
    color: '#000',
  },
  eyeIcon: {
    width: 32,
    height: 32,
  },
  loginButton: {
    backgroundColor: '#060000',
    padding: 15,
    borderRadius: 2,
    alignItems: 'center',
    marginBottom: 45,
  },
  loginText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  createAccount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
});
