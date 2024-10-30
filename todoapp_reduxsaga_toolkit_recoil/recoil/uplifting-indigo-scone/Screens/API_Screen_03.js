import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useRecoilState } from 'recoil';
import { jobListState } from '../jobState'; // Đảm bảo import jobListState từ file đúng

const Screen3 = ({ navigation, route }) => {
  const { taskId, taskTitle, refreshJobs } = route.params || {};
  const [input, setInput] = useState(taskTitle || ''); // Sử dụng taskTitle nếu có
  const [jobs, setJobs] = useRecoilState(jobListState); // Sử dụng Recoil để lấy và cập nhật danh sách công việc

  const handleFinish = () => {
    if (!input.trim()) {
      alert('Vui lòng nhập tiêu đề công việc');
      return;
    }

    const newJob = { id: taskId || Date.now(), title: input }; // Tạo công việc mới

    if (taskId) {
      // Cập nhật công việc nếu taskId đã có
      setJobs(jobs.map(job => (job.id === taskId ? newJob : job))); // Cập nhật công việc
    } else {
      // Thêm mới công việc
      setJobs([...jobs, newJob]); // Thêm công việc mới vào danh sách
    }

    setInput(''); // Xóa input sau khi hoàn thành
    if (refreshJobs) {
      refreshJobs(); // Gọi hàm để làm mới danh sách công việc nếu cần
    }
    navigation.goBack(); // Quay lại màn hình trước
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Image source={require("../assets/Frameprofile.png")} style={{ width: 40, height: 40, marginRight: 20 }} />
        <Text style={{ fontSize: 15, fontWeight: '600' }}>Hi, chúc bạn một ngày tốt lành!</Text>
      </View>
      <Text style={styles.title}>Add Your Job</Text>
      <TextInput
        placeholder="Input your job"
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleFinish}>
        <Text style={styles.addButtonText}>Finish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#c4c4c4', borderRadius: 8, padding: 10, marginBottom: 20 },
  addButton: { backgroundColor: '#00bdd6', borderRadius: 8, padding: 15, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: 'bold', marginHorizontal: 30 },
});

export default Screen3;
