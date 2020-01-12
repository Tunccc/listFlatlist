import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default class Card extends Component {  
    render() {
        const {textStyle} = styles;
        const {text, backgroundColor} = this.props;
        
        
        return (
                <View>
                    <Text style={[textStyle, {backgroundColor}]  } > {text}</Text>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle:{
        padding:10,
        marginVertical:10,
        borderWidth:5,
        borderColor:'blue',
        color:'black'
      }
});
