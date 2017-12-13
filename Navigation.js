import React from "react";
import { TabNavigator } from "react-navigation";

import Home from "./src/components/Home";
import Contacts from "./src/components/Contacts";
import Profile from "./src/components/Profile";
import Notification from "./src/components/Notification";


import {
    Ionicons,
    MaterialIcons,
    Entypo
} from "@expo/vector-icons";

const Navigation = TabNavigator({
    Home: {
        screen: Home,
        params: { hello: 'world' },
        navigationOptions: {
            tabBarLabel: false,
            title: "Home",
            tabBarIcon:<Entypo name="home" size={25} style={{color:'#999'}} />
        }
    },
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            tabBarLabel: false,
            tabBarIcon:<Ionicons name="ios-contacts" size={25} style={{color:'#999'}} />
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: <Entypo name="user" size={25}  style={{color:'#999'}}  />
        }
    },
    Notification: {
        screen: Notification,
        navigationOptions : {
            tabBarIcon: <MaterialIcons name="notifications" size={25}  style={{color:'#999'}}  />
        }
    }
},{
     initialRouteName:  'Contacts',
     tabBarOptions: {
        showIcon:true,
        showLabel: false
     }
});

export default Navigation;