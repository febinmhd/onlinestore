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
    ImageBackground, 
  } from 'react-native'
import { connect } from 'react-redux'

class Viewproducts extends Component {
    render() {
        return (
            <View>
                
        <Text style={{textAlign:'center', margin:10, fontFamily:'new',fontSize:45}}>{this.props.navigation.getParam('productname')}</Text>
       <View>
       {this.props.ShopReducer.products.map((products,index)=>
                  this.props.navigation.getParam('productname')===products[0]?
                  <View style={{justifyContent: "center",alignItems: 'center'}}><Image key={index} source={products[1]} style={{width: 400, height: 600}} /></View>
                  : null
                  )}
       </View>
                <Text>hi</Text>
                
            </View>

        )
    }
}


const mapStateToProps= (state)=>{
    return{
        ShopReducer: state.ShopReducer
    }
  }
export default connect(mapStateToProps)(Viewproducts);
