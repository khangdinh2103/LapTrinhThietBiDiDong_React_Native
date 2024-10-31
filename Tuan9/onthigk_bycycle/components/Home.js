import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import {useState,useEffect} from "react";
import axios from 'axios';

const Item = ({item, navigation}) => (
  <TouchableOpacity style={{justifyContent:'center',alignItems:'center',margin:5,padding:5,backgroundColor:'#F7BA8326',borderRadius:5,width:'50%',height:200}}
  onPress={()=> navigation.navigate('Detail',item)}
  >
    <Image source={{uri:item.image}} style={{width:130,height:120,margin:5}}/>
    <Text style={{color:'#c4c4c4',fontWeight:500,fontSize:16}}>{item.title}</Text>
    <Text style={{fontWeight:600,fontSize:16}}><Text style={{color:'#F7BA83'}}>$</Text> {item.price}</Text>
  </TouchableOpacity>
);


export default function Home({navigation}) {
  const [items,setItems] = useState([]);
  useEffect(() => {
    axios.get('https://66ff35612b9aac9c997e8502.mockapi.io/bike').then((res) =>{
      setItems(res.data);
    });
  }, []);

  const [filter,setFilter] = useState('all')
  const filterData = items.filter((bike)=>{
    if(filter=='all') return true;
    return bike.type == filter;
  })
  const buttonActive = (state)=>{
    return filter===state ? styles.buttonActive : styles.button;
  }
  const textButton = (state)=>{
    return filter===state ? styles.textActive : styles.text;
  }

  return (
    <View style={styles.container}>
        <View style={{width:'100%', padding:10, paddingBottom: 15}}>
            <TouchableOpacity onPress={() => {navigation.navigate("Start")}}>
              <Text style={{color: 'red', fontSize:20, fontWeight:600, paddingBottom: 20}}>The World's Best Bike</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems:'center'}}>
              <TouchableOpacity style={buttonActive('all')} 
                  onPress={()=>{setFilter('all')}}><Text style={textButton('all')}>All</Text></TouchableOpacity>
              <TouchableOpacity style={buttonActive(1)}
                onPress={()=>{setFilter(1)}}
                ><Text style={textButton(1)}>Roadbike</Text>
              </TouchableOpacity>
              <TouchableOpacity style={buttonActive(2)}
                onPress={()=>{setFilter(2)}}
                ><Text style={textButton(2)}>Mountain</Text>
              </TouchableOpacity>
            </View>
        
           <View style={{width:'100%',height:'85%',padding:10, marginLeft: -15, marginRight: -15}}>
              <FlatList
                data={filterData}
                renderItem={({item})=><Item item={item} navigation={navigation}/>}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
              />

           </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  buttonActive:{
    backgroundColor:'white',
    width:80,
    borderRadius:5,
    height:25,
    borderWidth:1,
    borderColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },


});
