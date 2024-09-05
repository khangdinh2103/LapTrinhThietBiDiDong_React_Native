import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Login3() {
  return (
    //tuan 3
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.a}>
        <View style={styles.lock}>
          <Image
            style={styles.group}
            source={{ uri: './assets/okhoa.png' }} 
          />
        </View>
        <Text style={styles.forgetPassword}>
          FORGET{'\n'}PASSWORD
        </Text>
        <Text style={styles.provideEmail}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <View style={styles.container1}>
          <View style={styles.mail}>
            <Image
              style={styles.containerImage}
              source={{ uri: './assets/thu.png' }} 
            />
          </View>
          <Text style={styles.email}>
            Email
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.next}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  a: {
    backgroundColor: '#00CCF9', 
    flex: 1,
    paddingVertical: 76,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  lock: {
    marginBottom: 37,
    width: 105,
    height: 117,
    justifyContent: 'center',
    alignItems: 'center',
  },
  group: {
    width: 105,
    height: 117,
  },
  forgetPassword: {
    marginBottom: 3,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
  },
  provideEmail: {
    marginHorizontal: 10,
    marginBottom: 27,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
    color: '#000000',
  },
  container1: {
    backgroundColor: '#C4C4C4',
    marginBottom: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  mail: {
    width: 48,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    width: 48,
    height: 45,
  },
  email: {
    marginVertical: 13,
    fontWeight: '400',
    fontSize: 15,
    color: '#000000',
  },
  button: {
    backgroundColor: '#E3C000',
    paddingVertical: 12,
    paddingHorizontal: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 48,
  },
  next: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
});
