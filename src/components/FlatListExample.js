import React, { Component } from 'react';
import { StyleSheet, View, Text,SafeAreaView, FlatList,Image, TouchableOpacity, TextInput} from 'react-native';
import data from '../../data';





class FlatListExample extends Component  {

  state = {
    text: '',
    contacts: data
  }

  RenderContactsItem = ({ item, index}) =>{
    return(
      <TouchableOpacity style= {[styles.itemContainer, {backgroundColor: index % 2 === 1 ?'#fafafa' : ''}] } > 
        <Image
        style= {styles.avatar}
        source = {{uri:(item.picture)}} />
        <View style={styles.textContainer}>
          <Text style= {styles.name}>{item.name}</Text>
          <Text style= {styles.companyStyle} > {item.company} </Text>
        </View>
      </TouchableOpacity>
    );
  }
  searchFilter = text => {
      const newData = data.filter(item =>{
        const listItem =  `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

        return listItem.indexOf(text.toLowerCase()) > -1;
      })
      this.setState({
        contacts:newData,
        
      })
  };

  renderHeader = () => {
    const { text }= this.state;
    return (
    
      <View style = {styles.HeaderInputContainer}>
        <TextInput
        style= { styles.headerInputStyle}
        placeholder= 'Search..'
        onChangeText = { text => this.setState({
          text
        }, this.searchFilter(text)
        )}
        
        value= {text}
        />
      </View>
    );
  }

 

  render(){

  return (
    
      <FlatList
      ListHeaderComponent = {this.renderHeader()}
      renderItem= {this.RenderContactsItem}
      keyExtractor= {(item) => item._id}
      data= {this.state.contacts}
      
      />  
  );
}};

const styles = StyleSheet.create({
  itemContainer: {
    flex:1,
    flexDirection:'row',
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#eee'
    
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
    marginHorizontal:10,
    
  },
  textContainer: {
    justifyContent:'space-around'
  },
  name :{
    fontSize:16
  },
  companyStyle: {
    opacity: .8,
    fontSize:10
  },
  headerInputStyle : {
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius: 10,
    marginHorizontal:10,
    padding:5,
    backgroundColor:'#f9f9f9'
  },
  HeaderInputContainer: {
    padding:10
  }
  
}
);

export default FlatListExample;
