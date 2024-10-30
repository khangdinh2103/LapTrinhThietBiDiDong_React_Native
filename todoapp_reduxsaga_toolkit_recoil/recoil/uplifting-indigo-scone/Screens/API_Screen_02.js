import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRecoilState } from 'recoil';
import { jobListState, deleteJob } from '../jobState';

const Screen2 = ({ navigation }) => {
  const [jobs, setJobs] = useRecoilState(jobListState);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addNewJob = () => {
    if (newJobTitle.trim()) {
      const newJob = {
        id: Date.now().toString(), // Tạo ID duy nhất cho công việc
        title: newJobTitle.trim(),
      };
      setJobs((prevJobs) => [...prevJobs, newJob]); // Cập nhật danh sách công việc
      setNewJobTitle(''); // Xóa trường nhập sau khi thêm
    }
  };

  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter(job => job.id !== id)); // Xóa công việc
  };

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
        data={filteredJobs}
        renderItem={({ item }) => (
          <View style={styles.jobContainer}>
            <Text style={styles.jobText}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <TextInput
        style={styles.input}
        placeholder="New Job Title"
        value={newJobTitle}
        onChangeText={setNewJobTitle}
      />
      <TouchableOpacity style={styles.addButton} onPress={addNewJob}>
        <Text style={styles.addButtonText}>Add Job</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
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
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  jobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  jobText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#00bdd6',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#c4c4c4',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default Screen2;
