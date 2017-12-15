import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import Home from "./src/components/Home";
import Contacts from "./src/components/Contacts";
import Profile from "./src/components/Profile";
import Toggle from "./src/components/Toggle";
import Notification from "./src/components/Notification";


import {
    Ionicons,
    MaterialIcons,
    Entypo
} from "@expo/vector-icons";


const HomeStack  = StackNavigator({
    Home: {
        screen: Home,
        params: { hello: 'world' },
        navigationOptions: {
            tabBarLabel: false,
            title: "Home",
            tabBarIcon:<Entypo name="home" size={25} style={{color:'#fff'}} />
        }
    },
    Toggle:{
        screen: Toggle,
        params: { hello: 'world' },
        navigationOptions: {
            tabBarLabel: false,
            title: "Home",
            tabBarIcon:<Entypo name="home" size={25} style={{color:'#fff'}} />
        }
    }
}, {
    initialRouteName: 'Toggle'
});

const Navigation = TabNavigator({
    Home: {
        screen: HomeStack
    },
    
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            tabBarLabel: false,
            tabBarIcon:<Ionicons name="ios-contacts" size={25} style={{color:'#fff'}} />
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: <Entypo name="user" size={25}  style={{color:'#fff'}}  />
        }
    },
    Notification: {
        screen: Notification,
        navigationOptions : {
            tabBarIcon: <MaterialIcons name="notifications" size={25}  style={{color:'#fff'}}  />
        }
    }
},{
     initialRouteName:  'Home',
    //   tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
     tabBarOptions: {
         
        showIcon:true,
        showLabel: false,
        activeBackgroundColor: '#39688a',
        // activeTintColor: 'black',
        // inactiveTintColor: 'grey',
        // activeBackgroundColor: 'white',
        inactiveBackgroundColor: '#669abf',
     }
});

export default Navigation;