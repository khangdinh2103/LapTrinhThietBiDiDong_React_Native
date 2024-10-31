import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

export default function Detail({route,navigation}) {
  const item = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}
      style={{width:'100%',height:'50%',backgroundColor:'#E941411A',alignItems:'center',justifyContent:'center'}}><Image source={{uri:item.image}} style={{width:'80%',height:"90%"}}/></TouchableOpacity>
      <View style={{width:'100%', paddingVertical:10}}>
      <Text style={{fontWeight:700,fontSize:20,paddingBottom:10}}>{item.title}</Text>
      <Text style={{fontSize:18,fontWeight:500}}>$ {item.price}<Text style={{fontSize:16,fontWeight:600,color:'#c4c4c4',paddingLeft:20}}>  15% OFF I 350$</Text></Text>
      </View>
      <View style={{width:'100%', paddingBottom:20}}>
      <Text style={{fontWeight:700, fontSize:16,paddingBottom:10}}>Description</Text>
      <Text style={{fontSize:14,fontWeight:400,color:'#c4c4c4'}}>It is a very important form of writing as {'\n'}we write almost everything in {'\n'}paragraphs, be it an answer, essay, story, {'\n'}emails, etc.</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:'100%'}}>
      <Image source={require('../assets/heart-icon.png')}/>
      <TouchableOpacity style={{backgroundColor:'red',borderRadius:20, width:200,height:40,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:18, fontWeight:600, color:'#fff'}}>Add to card</Text></TouchableOpacity></View>
      <View style={{paddingBottom:10}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width:'100%',
    height:'100%'
  },
});