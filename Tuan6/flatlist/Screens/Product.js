import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const data = [
  { id: '1', name: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/79de30486357002ee637df91e372e5aa', rating: 4.5, reviews: 15, discount: '-39%' },
  { id: '2', name: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/807f7b2bf1c6bb04a3792c1d1de52dae', rating: 4.0, reviews: 15, discount: '-39%' },
  { id: '3', name: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c3a5cf493f2679f74271f94099ae19d7', rating: 4.2, reviews: 15, discount: '-39%' },
  { id: '4', name: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8e94d60b3fc3b603a98569ffcdb72ba4', rating: 4.8, reviews: 15, discount: '-39%' },
  { id: '5', name: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/79de30486357002ee637df91e372e5aa', rating: 4.7, reviews: 15, discount: '-39%' },
  { id: '6', name: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', imageUrl: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4513d6726b36f3c384e5dfcc9d64cdaa', rating: 4.6, reviews: 15, discount: '-39%' },
];

const ProductItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productDiscount}>{item.discount}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.productRating}>
          <Icon name="star" size={14} color="gold" /> {item.rating} ({item.reviews})
        </Text>
      </View>
    </TouchableOpacity>
  );
};


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchIcon}>
            <Icon name="search-outline" size={24} color="#888" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Dây cáp usb"
            value={searchQuery}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
        <TouchableOpacity>
          <Icon name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        contentContainerStyle={styles.flatListContent}
      />
    <View style = {{
height: 42, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5,  position: 'absolute',
  bottom: 0, 
  left: 0, 
  right: 0, 
}}>
                <Image style={{marginLeft: 10}} source={require('./assets/Group 10.png')} />
        <Image source={require('./assets/Vector (Stroke).png')}/>
        <Image style={{marginRight: 10}} source={require('./assets/Vector 1 (Stroke).png')} />

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    paddingRight: 10, 
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  itemContainer: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2, 
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productDiscount: {
    fontSize: 12,
    color: '#ff3d00',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  productRating: {
    fontSize: 12,
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default App;
