import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Importing custom components
 
 import Navigation from "./Navigation";
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Navigation />
      </View>
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
