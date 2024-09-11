import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReviewScreen = () => {
  const [starCount, setStarCount] = useState(5); 
  const [text, setText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStarPress = (rating) => {
    setStarCount(rating);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image 
          source={require('./assets/usb.png')} 
          style={styles.productImage} 
        />
        <Text style={styles.productName}>
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth
        </Text>
      </View>

      <Text style={styles.ratingLabel}>Cực kỳ hài lòng</Text>
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
            <Icon
              name={star <= starCount ? 'star' : 'star-o'} 
              size={30}
              color="#FFD700" 
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addImageButton}>
        <Icon name="camera" size={24} color="#000" />
        <Text style={styles.addImageText}>Thêm hình ảnh</Text>
      </TouchableOpacity>

      <View style={styles.addText}>
        <TextInput
          style={styles.textInput}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          multiline={true}
          value={text}
          onChangeText={setText}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Gửi</Text>
      </TouchableOpacity>

      {isSubmitted && (
        <Text style={styles.successMessage}>Bạn đã gửi đánh giá thành công!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  ratingLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  star: {
    marginHorizontal: 5,
  },
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderColor: '#0D5DB6',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  addImageText: {
    marginLeft: 10,
    fontSize: 16,
  },
  addText: {
    marginBottom: 20,
    flexDirection: 'column',
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  textInput: {
    height: 100,
    paddingTop: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successMessage: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});

export default ReviewScreen;
