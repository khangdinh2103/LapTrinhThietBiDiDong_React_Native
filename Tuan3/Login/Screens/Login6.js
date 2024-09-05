import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function E() {
  return (
    //tuan 3
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.d}>
        <View style={styles.container4}>
          <Text style={styles.txtRegister}>REGISTER</Text>
          <View style={styles.container2}>
            <Text style={styles.txtName}>Name</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txtPhone}>Phone</Text>
          </View>
          <View style={styles.container6}>
            <Text style={styles.txtEmail}>Email</Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.txtPassword}>Password</Text>
            <View style={styles.eye1}>
              <Image
                style={styles.container1}
                source={{ uri: 'assets/vectors/Container_x2.svg' }} 
              />
            </View>
          </View>
          <View style={styles.container3}>
            <Text style={styles.txtBirthday}>Birthday</Text>
          </View>
          <View style={styles.container9}>
            <View style={styles.rdbMale}></View>
            <Text style={styles.txtMale}>Male</Text>
            <View style={styles.rdbFemale}></View>
            <Text style={styles.txtFemale}>Female</Text>
          </View>
          <TouchableOpacity style={styles.container10}>
            <Text style={styles.txtRegister1}>REGISTER</Text>
            
          </TouchableOpacity>
          <Text style={styles.whenYouAgreeToTerms}>When you agree to terms and conditions</Text>
          
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  d: {
    backgroundColor: '#FFFFFF',
    padding: 40,
    width: '100%',
    height: 640,
  },
  txtRegister: {
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
    marginBottom: 28,
  },
  container4: {
    flex: 1,
    alignItems: 'center',
  },
  container2: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding: 14,
    width: '100%',
    marginBottom: 16,
  },
  txtName: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  container: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding: 17,
    width: '100%',
    marginBottom: 16,
  },
  txtPhone: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  container6: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding: 10,
    width: '100%',
    marginBottom: 16,
  },
  txtEmail: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  container7: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding: 13,
    width: '100%',
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtPassword: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  eye1: {
    width: 38,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    width: 10.4,
    height: 9.8,
  },
  container3: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding: 14,
    width: '100%',
    marginBottom: 24,
  },
  txtBirthday: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  container9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 167.6,
    marginBottom: 26,
  },
  txtMale: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  txtFemale: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
  },
  container10: {
    backgroundColor: '#E53935',
    borderRadius: 2,
    padding: 11,
    width: '100%',
    marginRight: 2,
    alignItems: 'center',
  },
  txtRegister1: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
  },
  container8: {
    backgroundColor: 'rgba(49, 170, 82, 0.19)',
    padding: 36,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
    marginBottom: 84,
  },
  rdbMale: {
    borderRadius: 11.5,
    width: 23,
    height: 23,
    backgroundColor: '#000000', 
  },
  rdbFemale: {
    borderRadius: 11.5,
    width: 23,
    height: 23,
    backgroundColor: '#000000', 
  },
  whenYouAgreeToTerms: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    color: '#000000',
    marginLeft: 18.8,
  },
});
