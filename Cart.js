import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button,
    TextInput,
    Image,
    ScrollView,
    ImageBackground
  } from 'react-native'

export default class Cart extends Component {
    render() {
        return (
            
                <ImageBackground source={require('./images/green.jpg')} style={styles.image}>
                <Text>CART</Text>
                <Text>CART</Text>
                <Text>CART</Text>
                <Text>CART</Text>
                <Text>CART</Text>
                <Text>CART</Text>
                <Text>CART</Text>
                <Text>CART</Text>
                <Text>CART</Text>
                </ImageBackground>
                
        )
    }
}
const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    }
})