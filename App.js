import React, { Component } from 'react';
import { StyleSheet, View, Text,SafeAreaView, FlatList} from 'react-native';
import FlatListExample from './src/components/FlatListExample';





class App extends Component  {
  render(){
    return (
    <SafeAreaView style={styles.container}>
      <FlatListExample />
    </SafeAreaView>  
  );
}};

const styles = StyleSheet.create({
  container : {
    flex:1,
  },
  
}
);

export default App;
