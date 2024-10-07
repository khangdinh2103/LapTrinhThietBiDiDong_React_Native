import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, SafeAreaView, StyleSheet } from 'react-native';

const Screen3 = ({route, navigation}) => {
  const { taskId, taskTitle, onUpdate } = route.params || {};
  const [job, setJob] = useState(taskTitle || ''); // Nếu taskTitle có sẵn, sẽ dùng để hiển thị

  const handleFinish = () => {
    if (taskId) {
      // Nếu là edit, cập nhật task
      onUpdate(taskId, job);
    } else {
      // Thêm mới
      const newTask = { id: Math.random().toString(), title: job };
      onUpdate(newTask.id, newTask.title);
    }
    navigation.goBack(); // Quay lại Screen2 sau khi hoàn thành
  };
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
        <View>
        <Image source={require('../assets/Frame (1).png')} />
        </View>
        
        <View>
        <Text style={styles.greeting}>Hi Twinkie</Text>
        <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
      
        <Text style={styles.label}>ADD YOUR JOB</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setJob(text)}
          value={job}
          placeholder="Input your job"
        />
        <Button title="FINISH" onPress={handleFinish} />
        <Image
          source={require('../assets/Image 96.png')}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginVertical: 5, // Thêm khoảng cách giữa các văn bản
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    width: '80%', // Đặt chiều rộng cho input
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginBottom: 20, 
    marginTop: 10,
    marginLeft: 10,
  },
  textContainer: {
    alignItems: 'flex-end', 
    marginLeft: 10, 
   
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 16,
  },

});

export default Screen3;
