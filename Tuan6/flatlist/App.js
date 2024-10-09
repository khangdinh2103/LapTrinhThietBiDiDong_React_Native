import { Text, SafeAreaView, StyleSheet, Image, View,FlatList,StatusBar, TouchableOpacity, } from 'react-native';


const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
    image: require('./assets/ca_nau_lau.png'), 
  },
    {
    id: '3',
    title: 'Xe cần cảu đa năng',
    shop: 'Shop LTD Food',
    image: require('./assets/xa_can_cau.png'),
  
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
    
    ]
  type ItemProps = {
  title: string;
  shop: string;
  image: any;
};
const Item = ({title, shop, image}: ItemProps) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shop}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatText}>Chat</Text>
    </TouchableOpacity>
  </View>
);
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {{
height: 42, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, marginBottom: 0, 
}}>
        <Image source={require('./assets/ant-design_arrow-left-outlined.png')} />
        
        <Text style={{color: '#fff', fontSize: 24}}>Chat</Text>
        <Image source={require('./assets/bi_cart-check.png')} />

      </View>
      <View>
      <Text style={{marginLeft: 20, paddingTop: 20}}>Neu co thac mac gi ve san pham dung ngai chat voi shop</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} shop={item.shop} image={item.image} />
        )}
        keyExtractor={item => item.id}
      />
            <View style = {{
height: 42, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5,  position: 'absolute',
  bottom: 0, 
  left: 0, 
  right: 0, 
}}>
                <Image style={{marginLeft: 10}} source={require('./assets/Group 10.png')} />
        <Image source={require('./assets/Vector (Stroke).png')}/>
        <Image style={{marginRight: 10}} source={require('./assets/Vector 1 (Stroke).png')} />

      </View>
    </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 10,
    marginTop:0

  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  shop: {
    fontSize: 14,
    color: 'gray',
    marginTop:15
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  chatText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


