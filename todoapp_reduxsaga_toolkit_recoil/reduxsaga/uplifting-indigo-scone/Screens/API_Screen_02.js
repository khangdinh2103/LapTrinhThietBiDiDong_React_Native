import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsRequest, deleteJobRequest } from '../Redux_saga/jobSlice';

const Screen2 = ({ navigation }) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.list); // Lấy danh sách công việc từ Redux store
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteJobRequest(id)); // Gọi hành động xóa công việc
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.title}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={styles.editText}>✏️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require('../assets/Frameprofile.png')} />
        </View>
        <View>
          <Text style={styles.greeting}>Hi Twinkie</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery} // Cập nhật truy vấn tìm kiếm
      />
      <FlatList
        data={filteredJobs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Screen3', { addNewTask: (newTask) => console.log(newTask) })} // Chuyển đến màn hình thêm công việc
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
