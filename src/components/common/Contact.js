import React, { Component } from "react";
import { 
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    LayoutAnimation
    } from "react-native";
    
    const _window = Dimensions.get('window');
 
 class Contact extends Component {
    // const { title, image} = props;
    
    constructor(props){
        super(props);
        this.state = {
            selected:null
        }
        
    }

    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }

   render(){
    return (
        <View style={{flex:1,padding:10, borderBottomColor: '#ccc', borderBottomWidth: 1}} >
            <TouchableOpacity onPress={ () => { 
                this.props.onToggleList(this.props.title)}
                } style={{flex:1,flexDirection:'row', alignItems:'center'}}> 
                <Image  style={{width: 40, height: 40,borderRadius:20}} source={{uri: this.props.image}} / >
                <Text style={{paddingLeft:10,fontSize:25}}>{this.props.title}</Text>
            </TouchableOpacity>
            <View style={style.imageWrapper}>
            {this.props.selected == this.props.title && <Image resizeMode={'contain'}  style={style.image} source={{uri:  this.props.image}} / > }
            </View> 
           
        </View>
    )
   }
}

const style = StyleSheet.create({
    imageWrapper: {
        flex: 1,
        paddingTop: 10
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: _window.width-30,
        height: _window.width,
    }
})
 
export default Contact ;