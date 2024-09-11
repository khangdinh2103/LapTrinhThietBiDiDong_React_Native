import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800;
  const [totalPrice, setTotalPrice] = useState(pricePerItem);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * pricePerItem);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * pricePerItem);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.backgroundContainer}>
            <View style={styles.giftVoucherContainer}>
              <Text style={styles.giftVoucherText}>{"Bạn có phiếu quà tặng Tiki/Got it/ Urbox?"}</Text>
              <Text style={styles.linkText}>{"Nhập tại đây?"}</Text>
            </View>
            <View style={styles.totalContainer}>
              <View style={styles.priceRow}>
                <Text style={styles.totalText}>{"Thành tiền"}</Text>
                <Text style={styles.totalPrice}>{`${totalPrice.toLocaleString()} đ`}</Text>
              </View>
              <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>{"TIẾN HÀNH ĐẶT HÀNG"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.productContainer}>
            <View style={styles.productDetails}>
              <Image
                source={{ uri: "./assets/book.png" }}
                resizeMode={"stretch"}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{"Nguyên hàm tích phân và ứng dụng"}</Text>
                <Text style={styles.productSupplier}>{"Cung cấp bởi Tiki Trading"}</Text>
                <Text style={styles.productPrice}>{"141.800 đ"}</Text>
                <View style={styles.oldPriceContainer}>
                  <Text style={styles.oldPriceText}>{"141.800đ"}</Text>
                  
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={handleDecrease} style={styles.decrementButton}>
                    <View style={styles.minusLine} />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity onPress={handleIncrease} style={styles.incrementButton}>
                    <View style={styles.plusVertical} />
                    <View style={styles.plusHorizontal} />
                  </TouchableOpacity>
                  <Text style={styles.buyLaterText}>{"Mua sau"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>{"Mã giảm giá đã lưu"}</Text>
              <Text style={styles.linkText}>{"Xem tại đây"}</Text>
            </View>
            <View style={styles.couponContainer}>
              <View style={styles.couponBox}>
                <View style={styles.couponIcon} />
                <Text style={styles.couponText}>{"Mã giảm giá"}</Text>
              </View>
              <View style={styles.applyButton}>
                <Text style={styles.applyButtonText}>{"Áp dụng"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.subtotalContainer}>
            <View style={styles.subtotalRow}>
              <Text style={styles.subtotalText}>{"Tạm tính"}</Text>
              <Text style={styles.subtotalPrice}>{`${totalPrice.toLocaleString()} đ`}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },
  scrollView: {
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },
  container: {
    paddingHorizontal: 1 
  },
  backgroundContainer: { 
    backgroundColor: "#C4C4C4", 
    paddingTop: 297 
  },
  giftVoucherContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#FFFFFF", 
    padding: 17, 
    marginBottom: 172 
  },
  giftVoucherText: { 
    color: "#011627", 
    fontSize: 12, 
    fontWeight: "bold", 
    marginRight: 9 
  },
  linkText: { 
    color: "#124FEB", 
    fontSize: 12, 
    fontWeight: "bold", 
    flex: 1 
  },
  totalContainer: { 
    backgroundColor: "#FFFFFF", 
    paddingVertical: 17, 
    paddingHorizontal: 13 
  },
  priceRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 21 
  },
  totalText: { 
    color: "#808080", 
    fontSize: 18, 
    fontWeight: "bold", 
    flex: 1 
  },
  totalPrice: { 
    color: "#EE0C0C", 
    fontSize: 20, 
    fontWeight: "bold" 
  },
  orderButton: { 
    alignItems: "center", 
    backgroundColor: "#E53935", 
    borderRadius: 2, 
    paddingVertical: 11 
  },
  orderButtonText: { 
    color: "#FFFFFF", 
    fontSize: 20, 
    fontWeight: "bold" 
  },
  productContainer: { 
    position: "absolute", 
    top: 0, 
    left: 1, 
    width: 360, 
    height: 283, 
    backgroundColor: "#FFFFFF", 
    paddingHorizontal: 12 
  },
  productDetails: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: 14, 
    marginBottom: 22 
  },
  productImage: { 
    width: 104, 
    height: 127 
  },
  productInfo: { 
    width: 196, 
    paddingHorizontal: 2 
  },
  productTitle: { 
    color: "#000000", 
    fontSize: 12, 
    fontWeight: "bold", 
    marginBottom: 16 
  },
  productSupplier: { 
    color: "#000000", 
    fontSize: 12, 
    fontWeight: "bold", 
    marginBottom: 15 
  },
  productPrice: { 
    color: "#EE0C0C", 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 12 
  },
  oldPriceContainer: { 
    width: 53, 
    height: 12, 
    marginBottom: 11 
  },
  oldPriceText: { 
    color: "#808080", 
    fontSize: 12, 
    fontWeight: "bold",
    textDecorationLine: 'line-through'
  },
  quantityContainer: { 
    flexDirection: "row", 
    alignItems: "center" 
  },
  decrementButton: { 
    width: 14, 
    backgroundColor: "#ffff", 
    paddingHorizontal: 3, 
    marginRight: 13, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  minusLine: { 
    height: 2, 
    backgroundColor: "#808080", 
    width: 10 
  },
  quantityText: { 
    color: "#000000", 
    fontSize: 15, 
    fontWeight: "bold", 
    marginRight: 14 
  },
  incrementButton: { 
    width: 14, 
    backgroundColor: "#C4C4C4", 
    justifyContent: "center", 
    alignItems: "center", 
    paddingVertical: 4 
  },
  plusVertical: { 
    height: 8, 
    width: 2, 
    backgroundColor: "#011627" 
  },
  plusHorizontal: { 
    position: "absolute", 
    height: 2, 
    width: 8, 
    backgroundColor: "#011627" 
  },
  buyLaterText: { 
    marginLeft: 40,
    color: "#124FEB", 
    fontSize: 12, 
    fontWeight: "bold" 
  },
  discountContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 35 
  },
  discountText: { 
    color: "#011627", 
    fontSize: 12, 
    fontWeight: "bold", 
    marginRight: 20 
  },
  couponContainer: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },
  couponBox: { 
    width: 208, 
    flexDirection: "row", 
    alignItems: "center", 
    borderColor: "#808080", 
    borderRadius: 2, 
    borderWidth: 1, 
    paddingVertical: 15, 
    paddingHorizontal: 13 
    
  },
  couponIcon: { 
    width: 32, 
    height: 16, 
    backgroundColor: "#F2DC1B", 
    marginRight: 11 
  },
  couponText: { 
    color: "#011627", 
    fontSize: 18, 
    fontWeight: "bold", 
    flex: 1 
  },
  applyButton: { 
    width: 99, 
    alignItems: "center", 
    backgroundColor: "#0A5EB7", 
    borderRadius: 2, 
    paddingVertical: 11 
  },
  applyButtonText: { 
    color: "#FFFFFF", 
    fontSize: 20, 
    fontWeight: "bold" 
  },
  subtotalContainer: { 
    position: "absolute", 
    bottom: 229, 
    left: 1, 
    width: 360, 
    height: 51, 
    backgroundColor: "#FFFFFF", 
    paddingHorizontal: 14 
  },
  subtotalRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 14 
  },
  subtotalText: { 
    color: "#011627", 
    fontSize: 18, 
    fontWeight: "bold", 
    flex: 1 
  },
  subtotalPrice: { 
    color: "#EE0C0C", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
});


export default ProductScreen;
