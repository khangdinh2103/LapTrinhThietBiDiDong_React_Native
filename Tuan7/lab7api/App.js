import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newName, setNewName] = useState('');
  const [addName, setAddName] = useState('');
  const [showData, setShowData] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const apiURL = 'https://6705d575031fd46a83111385.mockapi.io/api/v1/users'; 

  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addRecord = async () => {
    if (addName.trim() === '') {
      alert('Please enter a name!');
      return;
    }
    try {
      const newRecord = { name: addName };
      await axios.post(apiURL, newRecord);
      setAddName('');
      fetchData();
      setShowAddForm(false);
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  const editRecord = async (id) => {
    try {
      const updatedRecord = { name: newName };
      await axios.put(`${apiURL}/${id}`, updatedRecord);
      setEditId(null);
      setNewName('');
      fetchData();
    } catch (error) {
      console.error('Error editing record:', error);
    }
  };

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`${apiURL}/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {editId === item.id ? (
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
          placeholder="Enter new name"
        />
      ) : (
        <Text style={styles.itemText}>{item.name}</Text>
      )}
      <View style={styles.buttonGroup}>
        {editId === item.id ? (
          <Button title="Save" onPress={() => editRecord(item.id)} />
        ) : (
          <Button title="Edit" onPress={() => {
            setEditId(item.id);
            setNewName(item.name);
          }} />
        )}
        <Button title="Delete" onPress={() => deleteRecord(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button 
        title="Add New Record" 
        onPress={() => setShowAddForm(true)} />

      {showAddForm && ( 
        <View>
          <TextInput
            style={styles.input}
            value={addName}
            onChangeText={setAddName}
            placeholder="Enter name to add"
          />
          <Button 
            title="Add Record" 
            onPress={addRecord} 
          />
        </View>
      )}
      
      <Button 
        title="Display Records" 
        onPress={() => {
          fetchData();
          setShowData(true);  
        }} 
      />
      
      {showData && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  itemText: {
    flex: 1, 
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    gap: 10, 
  },
});

export default App;
