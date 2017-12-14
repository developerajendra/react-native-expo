import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStore} from "redux";
import { Provider } from "react-redux";

import reducers from "./src/reducers";


//Importing custom components
 
 import Navigation from "./Navigation";
 
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
            <Navigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     // marginTop:30
  },
});
