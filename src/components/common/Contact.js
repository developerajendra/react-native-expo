import React from "react";
import { 
    Text,
    View,
    Image,
    FlatList
    } from "react-native";
    
 
const Contact = (props)=> {
    const { title, image} = props;
    return (
        <View style={{  flexDirection:'row',alignItems:'center',padding:10}} >
           <Image  style={{width: 130, height: 130,borderRadius:65}} source={{uri: image}} / >
           <Text style={{paddingLeft:10,fontSize:25}}>{title}</Text>

           {/* <FlatList data={[{title: title}, {image: image}]} renderItem={({item}) =>    
            <View>
                <Text style={{paddingLeft:10,fontSize:25}}>{item.title}</Text> 
                <Image  style={{width: 130, height: 130,borderRadius:65}} source={{uri: item.image}} / >
            </View>} 
           /> */}

        </View>
    )
}
 
 
export default Contact ;