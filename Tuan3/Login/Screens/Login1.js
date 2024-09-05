import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function FirstScreen() {
  return (
    <View style={styles.firstScreen}>
      <View>
        <Image source={require('./assets/vongtron.png')} />
      </View>
      <Text style={styles.growYourBusiness}>
        GROW {"\n"}
        YOUR BUSINESS
      </Text>
      <Text style={styles.weWillHelp}>
        We will help you to grow your business using{"\n"}
        online server
      </Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.group}>
          <Text style={styles.loginSignUpText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group}>
          <Text style={styles.loginSignUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  firstScreen: {
    backgroundColor: '#00CCF9',
    flex: 1,
    alignItems: 'center',
    paddingTop: 67,
    paddingHorizontal: 25,
    paddingBottom: 45,
    position: 'relative',
  },
  growYourBusiness: {
    marginTop:30,
    marginBottom: 62,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
  },
  weWillHelp: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
    color: '#000000',
    marginBottom: 93,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 289,
  },
  group: {
    borderRadius: 10,
    backgroundColor: '#E3C000',
    paddingVertical: 13,
    width: 119,
    alignItems: 'center',
  },
  loginSignUpText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
  },
  howWeWorkText: {
    fontSize: 14, // Kích thước chữ
    fontWeight: '700', // Độ đậm của chữ
    color: '#000000', // Màu chữ
  },
});
