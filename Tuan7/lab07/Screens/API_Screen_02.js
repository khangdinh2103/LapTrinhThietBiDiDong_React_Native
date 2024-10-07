import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Screen2 = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email' },
    { id: '2', title: 'UI task web page' },
    { id: '3', title: 'Learn javascript basic' },
    { id: '4', title: 'Learn HTML Advance' },
    { id: '5', title: 'Medical App UI' },
    { id: '6', title: 'Learn Java' },
  ]);

  // Hàm cập nhật lại task sau khi chỉnh sửa
  const updateTask = (id, newTitle) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Screen3', {
            taskId: item.id,
            taskTitle: item.title,
            onUpdate: updateTask,
          });
        }}
      >
        <Text style={styles.editText}>✏️</Text>
      </TouchableOpacity>
    </View>
  );

  const addNewTask = (newTask) => {
    setTasks([...tasks, { id: (tasks.length + 1).toString(), title: newTask }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require('../assets/Frame (1).png')} />
        </View>
        <View>
          <Text style={styles.greeting}>Hi Twinkie</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Screen3', { addNewTask })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 80,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  editText: {
    fontSize: 20,
    color: '#007BFF',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: '50%',
    marginLeft: -25,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Screen2;
