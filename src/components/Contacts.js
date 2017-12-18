import React, { Component } from "react";
import { 
    Text,
    View,
    FlatList
    } from "react-native";
    
import Header from "./Header";

import  Contact  from "./common/Contact";

import Expo, { Permissions } from "expo";
 
class Contacts extends Component{
    constructor(props) {
        super(props);

        this.state = {
            userData: null
        }
        console.log("constructor")
    }
    componentWillMount(){
        console.log("componentWillMount",);
        // this.getPeoplesDetail();
        this.getcontacts();
    }

    getcontacts = async () => {
        console.log("yes....");
         
        const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);

            
            if(permission.status !== "granted"){
                return;
            }

            const contacts = await Expo.Contacts.getContactsAsync({
                fields : [
                    Expo.Contacts.PHONE_NUMBERS
                   
                ],
                pageSize: 10000,
                pageOffset: 0
            });
        
            console.log("permission...", contacts);

            this.setState({userData: contacts.data});
        
    }

    componentDidMount(){
        console.log("componentDidMount",);
    }

    componentWillReceiveProps(){
        console.log("componentWillReceieProps");
    }

    getPeoplesDetail =   () => {
           fetch("https://rallycoding.herokuapp.com/api/music_albums")
           .then((response) =>  response.json())
           .then((data) => {
            this.setState({userData: data});
           });
        
        // const response = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
        // const data = await response.json();
        // this.setState({userData: data});
        // console.log("fetch aync data", data);
            
    }

    mappedUserData = () => {
        console.log("this.state.userData",this.state.userData)
        return this.state.userData && this.state.userData.map((item)=>{
            console.log("dddd...",item);
            // return <Contact key={item.title} data={item}  />
            // return <FlatList data={[{title: item.artist }, {image: item.image}]} renderItem={({item}) =><Contact image={item.image} title={item.title}  />}/>
          
        });
    }
 
    _keyExtractor = (item, index) => item.firstName;

    render() {
        return (
            <View style={{flex:1}}>
                <Header />
                {
                   this.state.userData ?  <FlatList
                    data={this.state.userData}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item})=> <Contact image={item.id} title={item.firstName}  /> }
                /> : <Text>Loading...</Text>
                }
            </View>
        )
    }
}
 
 
export default Contacts;