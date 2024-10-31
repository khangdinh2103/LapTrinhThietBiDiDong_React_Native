import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Start({navigation}) {
  return (
    <View style={styles.container}>
        <View>
        <Text style = {{fontSize: 20, fontWeight:500}}>A premium online store for{'\n'}sporter and their stylish choice</Text>
        </View>

        <View style= {styles.boxcontainer}>
            <Image source={{uri:'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__'}} style={{width:160,height:150}}/>
        </View>

        <View>
          <Text style = {{fontSize: 20, fontWeight: '700'}}> POWER BIKE {'\n'}       SHOP</Text>
        </View>

        <View style= {{width: '100%', alignItems: 'center'}}>
          <TouchableOpacity style= {styles.btn}
          onPress={() => {navigation.navigate('Home')}}>
              <Text style= {{textAlign: 'center', fontSize: 20, fontWeight: 500, color: 'white'}}>Get Started</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
  },
  boxcontainer: {
    backgroundColor: '#E941411A',
    borderRadius: 20,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  btn :{
    backgroundColor: 'red', 
    borderRadius: 10,
    width: '50%',
    height: 40,
  } 
});
