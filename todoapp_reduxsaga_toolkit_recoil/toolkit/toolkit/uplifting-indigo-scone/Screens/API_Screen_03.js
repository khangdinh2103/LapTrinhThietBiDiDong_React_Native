import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { createJob, updateJob } from '../components/redux/toolkit'; // Import các hành động từ Redux slice

const Screen3 = ({ navigation, route }) => {
  const { taskId, taskTitle } = route.params || {};
  const [input, setInput] = useState(taskTitle || ''); // Sử dụng taskTitle nếu có
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const dispatch = useDispatch();

  const handleFinish = async () => {
    if (!input) {
      alert('Vui lòng nhập tiêu đề công việc');
      return;
    }

    setLoading(true); // Bắt đầu xử lý

    try {
      if (taskId) {
        // Cập nhật công việc nếu taskId đã có
        await dispatch(updateJob({ id: taskId, newTitle: input }));
      } else {
        // Thêm mới công việc
        await dispatch(createJob(input));
      }
      setInput(''); // Xóa input sau khi hoàn thành
      navigation.goBack(); // Quay lại màn hình trước
    } catch (error) {
      console.error('Lỗi khi lưu công việc:', error);
      alert('Không thể lưu công việc. Vui lòng thử lại.');
    } finally {
      setLoading(false); // Kết thúc xử lý
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
      <TouchableOpacity style={styles.addButton} onPress={handleFinish} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.addButtonText}>Finish</Text>
        )}
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
