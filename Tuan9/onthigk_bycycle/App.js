import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Start from './components/Started';
import Home from './components/Home'
import Detail from './components/Detail'
// or any files within the Snack

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Start"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


