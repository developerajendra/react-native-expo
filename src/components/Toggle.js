import React, { Component } from "react";
import { 
    View,
    Text
 } from "react-native";

class Toggle extends Component{ 
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>hello</Text>
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        borderWidth : 1,
        borderRadius: 2,
        borderColor: "#ddd",
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width:0, height:2 },
        shadowOpacity: 0.1,
        // shadowRadious: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}
export default Toggle;