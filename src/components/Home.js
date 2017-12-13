import React from "react";
import { 
    Text,
    View,
    TouchableOpacity
    } from "react-native";
    
  
 
const Home = (props)=> {
    return (
        <View style={{backgroundColor: '#467292',flex:1, justifyContent: 'center', alignItems:'center'}}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Toggle')}>
                <Text style={{fontSize:40, color:'#ccc',fontWeight:'bold'}}>Redux</Text>
              </TouchableOpacity>
           
            <TouchableOpacity>
                <Text style={{fontSize:40, color:'#ccc',fontWeight:'bold'}}>Flex Box</Text>
            </TouchableOpacity>
        </View>
    )
}
 
 
export default Home;