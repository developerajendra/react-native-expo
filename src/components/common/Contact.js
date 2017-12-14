import React, { Component } from "react";
import { 
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
    } from "react-native";
    
 
 class Contact extends Component {
    // const { title, image} = props;
    
    constructor(props){
        super(props);
        this.state = {
            selected:null
        }
        
    }

   

   render(){
       console.log("selected", )
    return (
        <View style={{flex:1,padding:10}} >
            <TouchableOpacity onPress={ () => { 
                this.props.onToggleList(this.props.title)}
                } style={{flex:1,flexDirection:'row', alignItems:'center'}}> 
                <Image  style={{width: 130, height: 130,borderRadius:65}} source={{uri: this.props.image}} / >
                <Text style={{paddingLeft:10,fontSize:25}}>{this.props.title}</Text>
            </TouchableOpacity>
            <View style={{flex:1}}>
            {this.props.selected == this.props.title && <Image  style={{flex:1, width: 300, height: 300}} source={{uri:  this.props.image}} / > }
            </View> 
           
        </View>
    )
   }
}
 
export default Contact ;