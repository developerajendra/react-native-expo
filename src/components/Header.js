import React from "react";
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity
    } from "react-native";
    
import {
     Ionicons,
     MaterialIcons,
     Entypo
} from "@expo/vector-icons";

const Header = ()=> {
    const {header, headerElements} = styles;
    return (
        <View style={header}>
            <TouchableOpacity>
                <MaterialIcons style={headerElements} name="delete" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={headerElements}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo style={headerElements} name="plus" size={25} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       shadowColor: '#999',
       shadowOffset: {width:0, height:5},
       shadowOpacity: 0.1,
       paddingVertical: 20,
       paddingHorizontal: 10
        
    },

    headerElements: {
        // flex: 1
    }
});
 
export default Header;