import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { createJob, updateJob } from '../api'; // Import các hàm từ API

const Screen3 = ({ navigation, route }) => {
  const { taskId, taskTitle, refreshJobs } = route.params || {};
  const [input, setInput] = useState(taskTitle || ''); // Sử dụng taskTitle nếu có

  const handleFinish = async () => {
    if (!input) {
      alert('Vui lòng nhập tiêu đề công việc');
      return;
    }

    try {
      if (taskId) {
        // Cập nhật công việc nếu taskId đã có
        await updateJob(taskId, input);
      } else {
        // Thêm mới công việc
        await createJob(input);
      }
      setInput(''); // Xóa input sau khi hoàn thành
      refreshJobs(); // Gọi hàm để làm mới danh sách công việc
      navigation.goBack(); // Quay lại màn hình trước
    } catch (error) {
      console.error('Lỗi khi lưu công việc:', error);
      alert('Không thể lưu công việc. Vui lòng thử lại.');
    }
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
