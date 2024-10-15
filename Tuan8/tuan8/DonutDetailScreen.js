import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DonutDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>Spicy tasty donut family</Text>
      <Text style={styles.price}>${item.id * 10}.00</Text> {/* Example price based on ID */}
      <Text style={styles.delivery}>Delivery in 30 min</Text>

      <View style={styles.row}>
        <Text style={styles.info}>Restaurants info</Text>
        <Text style={styles.desc}>
          Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
        </Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 20,
    color: '#333',
    marginVertical: 10,
  },
  delivery: {
    fontSize: 16,
    color: '#ff6347',
    marginBottom: 20,
  },
  row: {
    marginVertical: 15,
  },
  info: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DonutDetailsScreen;
