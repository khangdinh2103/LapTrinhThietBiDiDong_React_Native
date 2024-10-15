import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const DonutListScreen = ({ navigation }) => {
  const [donuts, setDonuts] = useState([]);
  const [filteredDonuts, setFilteredDonuts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    // Fetch data from the mock API
    axios.get('https://670d1d5c073307b4ee42595d.mockapi.io/api/v1/donuts')
      .then(response => {
        setDonuts(response.data);
        setFilteredDonuts(response.data); // Initial filter set to all items
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    filterItems(activeTab, text);
  };

  const filterByType = (type) => {
    setActiveTab(type);
    filterItems(type, searchText);
  };

  const filterItems = (type, text) => {
    let filtered = donuts;

    // Filter by specific type based on tab selection
    if (type === 'Pink Donut') {
      filtered = donuts.filter(donut => donut.type === 'type 1');
    } else if (type === 'Floating') {
      filtered = donuts.filter(donut => donut.type === 'type 2');
    } else if (type !== 'All') {
      filtered = donuts.filter(donut => donut.title.toLowerCase().includes(type.toLowerCase()));
    }

    // Further filter by search text
    if (text) {
      filtered = filtered.filter(donut => donut.name.toLowerCase().includes(text.toLowerCase()));
    }

    setFilteredDonuts(filtered);
  };

  const renderDonut = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DonutDetails', { item })}>
      <View style={styles.card}>
        <Image source={{ uri: item.avatar }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.desc}>{item.type}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchText}
        onChangeText={handleSearch} // Real-time search filter
      />

      {/* Tabs for Filtering */}
      <View style={styles.tabContainer}>
        {['All', 'Donut', 'Pink Donut', 'Floating'].map(type => (
          <TouchableOpacity
            key={type}
            style={[styles.tabButton, activeTab === type && styles.activeTab]}
            onPress={() => filterByType(type)}
          >
            <Text style={[styles.tabText, activeTab === type && styles.activeTabText]}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Donut List */}
      <FlatList
        data={filteredDonuts}
        keyExtractor={item => item.id}
        renderItem={renderDonut}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... same styles as before
   container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  searchInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#ffcccb',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#ff6347',
  },
  list: {
    flexGrow: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 24,
  },
});

export default DonutListScreen;
