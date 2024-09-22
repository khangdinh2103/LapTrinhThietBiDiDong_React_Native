import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={require('./assets/ĐthXanh.png')}
            style={{ width: 301, height: 361, alignSelf: 'center' }}
          />
          <Text style={{ fontSize: 17, fontWeight: 'light', textAlign: 'center', marginBottom: 10 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={{flexDirection: 'row', alignItems: 'center' }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={require('./assets/star.png')} style={{ width: 24, height: 25,marginLeft: 18, marginRight: 2 }} />
          <Image source={require('./assets/star.png')} style={{ width: 24, height: 25, marginRight: 2}} />
          <Image source={require('./assets/star.png')} style={{ width: 24, height: 25, marginRight: 2 }} />
            <Image source={require('./assets/star.png')} style={{ width: 24, height: 25,  marginRight: 2 }} />
            <Image source={require('./assets/star.png')} style={{ width: 24, height: 25,  marginRight: 2 }} />
          </View>
      
              <Text style={{marginLeft: 20}}>(Xem 828 đánh giá)</Text>
            
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12, marginRight: 100,paddingLeft: 18, marginTop: 10 }}>
          <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold", marginRight: 47 }}>
            {"1.790.000 đ"}
          </Text>
          <View style={{ width: 90 }}>
            <Text style={{ color: "#000000", fontSize: 15, textDecorationLine: "line-through" }}>
              {"1.790.000 đ"}
            </Text> 
           </View>

        </View>

        
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16, marginRight: 163, paddingLeft: 18 }}>
          <Text style={{ color: "#F90000", fontSize: 12, fontWeight: "bold", marginRight: 9 }}>
            {"Ở ĐÂU RẺ HƠN HOÀN TIỀN"}
          </Text>
          <Image
            source={require('./assets/chamHoi.png')}
            style={{ width: 20, height: 20 }}
          />
        </View>

        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#00000075",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 9,
            paddingLeft: 104,
            paddingRight: 20,
            marginBottom: 59,
            marginRight: 10,
            shadowColor: "#00000040",
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 4,
            elevation: 4,
            marginLeft: 10
          }}
          onPress={() => navigation.navigate('ColorSelectionScreen')}
        >
          <Text style={{ color: "#000000", fontSize: 15, marginRight: 4, flex: 1 }}>
            {"4 MÀU-CHỌN MÀU"}
          </Text>
          <Image
            source={require('./assets/MuiTenPhai.png')}
            style={{ width: 11, height: 14 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#EE0909",
            borderColor: "#C91535",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 16,
            marginRight: 13,
            shadowColor: "#00000040",
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 4,
            elevation: 4,
            marginLeft: 15
          }}
          onPress={() => alert('Item added to cart!')}
        >
          <Text style={{ color: "#F8F2F2", fontSize: 20, fontWeight: "bold" }}>
            {"CHỌN MUA"}
          </Text>
        </TouchableOpacity>


      </ScrollView>
    </SafeAreaView>
  );
}
function ColorSelectionScreen() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#FFFFFF' }}>
      <Image
        source={require('./assets/ĐthXanh.png')} 
        style={{ width: 150, height: 200, resizeMode: 'contain' }}
      />
      <Text style={{ marginTop: 8, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>

      <View style={{ backgroundColor: '#C4C4C4', width: '100%', padding: 10, borderRadius: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 10 }}>Chọn một màu bên dưới:</Text>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          {['#00BFFF', '#FF4500', '#000000', '#0000FF'].map((color, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 80,
                height: 80,
                backgroundColor: color,
                marginBottom: 10, // Add spacing between colors
                borderRadius: 10, // Optional: for rounded corners
              }}
              onPress={() => console.log('Selected color: ' + color)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#007BFF',
          borderRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 40
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>XONG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ColorSelectionScreen" component={ColorSelectionScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
