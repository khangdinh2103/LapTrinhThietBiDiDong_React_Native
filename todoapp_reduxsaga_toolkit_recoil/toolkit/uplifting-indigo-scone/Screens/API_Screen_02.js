import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getJobs, createJob, updateJob, deleteJob } from '../api'; // Import các hàm từ API

const Screen2 = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Hàm lấy danh sách jobs từ API
  const refreshJobs = async () => {
    setLoading(true);
    try {
      const fetchedJobs = await getJobs();
      setJobs(fetchedJobs);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách công việc:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshJobs();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = jobs.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
      setJobs(filtered);
    } else {
      refreshJobs(); // Lấy lại danh sách jobs khi không có truy vấn tìm kiếm
    }
  };

  // Hàm cập nhật lại job sau khi chỉnh sửa
  const handleUpdateJob = async (id, newTitle) => {
    try {
      const updatedJob = await updateJob(id, newTitle);
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job.id === id ? updatedJob : job))
      );
    } catch (error) {
      console.error('Lỗi khi cập nhật công việc:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.jobContainer}>
      <Text style={styles.jobText}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Screen3', {
            jobId: item.id,
            jobTitle: item.title,
            onUpdate: handleUpdateJob,
          });
        }}
      >
        <Text style={styles.editText}>✏️</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          await deleteJob(item.id);
          refreshJobs(); // Làm mới danh sách sau khi xóa
        }}
      >
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  const addNewJob = async (newTitle) => {
    try {
      const newJob = await createJob(newTitle);
      setJobs((prevJobs) => [...prevJobs, newJob]);
    } catch (error) {
      console.error('Lỗi khi tạo công việc mới:', error);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>; // Hiển thị khi đang tải
  }

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
        onChangeText={handleSearch}
      />
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Screen3', { addNewJob })}
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
  jobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  jobText: {
    fontSize: 16,
  },
  editText: {
    fontSize: 20,
    color: '#007BFF',
  },
  deleteText: {
    fontSize: 20,
    color: '#FF0000',
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
