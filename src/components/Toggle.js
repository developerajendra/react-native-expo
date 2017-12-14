import React, { Component, PureComponent } from "react";
import { 
    View,
    Text,
    FlatList,
    Button,
    TouchableOpacity
 } from "react-native";

 import { connect } from "react-redux";
 import Contact from "./common/Contact";

 import * as actions from "../actions";
// import { setTimeout } from "timers";

class Toggle extends Component{ 
    constructor(props){
        super(props);
       
        this.state = {
            selected: null
        }
    }
    _keyExtractor = (item,index) => item.title;
    

    toggleList =  (title) => {
        
        this.props.SelectionAction(title);
        
    }

    componentWillReceiveProps(nextProps){
        this.setState({selected:nextProps.selectedData});
    }
 
    render() {
        
        const item = this.props.peoples[0];
        return (
            <View style={styles.containerStyle}>
            <Text> {this.state.selected}  </Text>
            {/* <Button onPress={() => {this.toggleList('some title')}} title={'change state'} /> */}
               {
                   this.props && this.props.peoples  ? 
                        <FlatList  
                            data={this.props.peoples}
                            keyExtractor={this._keyExtractor}
                            extraData={this.state}
                            renderItem={({item})=> <Contact selected={this.state.selected}  onToggleList={this.toggleList} image={item.image} title={item.title}  /> }
                        /> 
                   : <Text>Loading...</Text>
                }
            </View>
        );
    }
}

class Comp extends PureComponent {
    render() {
        console.log("Child re-render");
        return <View><Text>Not a PURE component</Text></View>
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

const mapStateToProps = state => {
    return {
        peoples: state.defaultData,
        selectedData: state.selectedData
    }
};

export default connect(mapStateToProps,actions)(Toggle);