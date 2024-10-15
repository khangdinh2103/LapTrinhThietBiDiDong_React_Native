import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DonutListScreen from './DonutListScreen'; // The main screen displaying the FlatList
import DonutDetailsScreen from './DonutDetailScreen'; // The new detailed screen


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DonutList">
        <Stack.Screen name="DonutList" component={DonutListScreen} options={{ title: 'Donut List' }} />
        <Stack.Screen name="DonutDetails" component={DonutDetailsScreen} options={{ title: 'Donut Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
