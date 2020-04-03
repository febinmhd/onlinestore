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
  import { connect } from 'react-redux'
  import axios from 'axios'

  

class Cart extends Component {

  state={
    name:null,
    number:null,
    address:null,
  }

handlename = (text) => {
  this.setState({ name: text })
}

handlenumber = (text) => {
  this.setState({ number: text })
}
handleaddress = (text) => {
  this.setState({ address: text })
}

  submit=event=>{

    axios({
      method: 'post',
      url:process.env.API,
      headers: { 'Content-Type':'application/json' },
      data: {
          "name": this.state.name,
          "number":this.state.number,
          "address":this.state.address,
          }

      })
      .then(async response=> {
        await console.log(response)
       })

    console.log(this.state.name,this.state.number,this.state.address)
  }; 
    render() {
        return (
          <ScrollView>
                <ImageBackground source={require('./images/new.jpg')} style={styles.image}>
                <Text style={{textAlign:'center', margin:60, fontFamily:'new',fontSize:40}}>Review your cart</Text>

                  <Text style={{textAlign:'center', margin:30}}>{this.props.ShopReducer.cart}</Text>
                  {this.props.ShopReducer.cart.map((cartitems,index)=>

                  
                  <View key={index} style={{display:'flex',flexDirection:'column'}}>

                  <View style={{display:'flex',flexDirection:'row'}}>
                  {this.props.ShopReducer.products.map((products,index)=>
                  cartitems[0]===products[0]?
                  <Image key={index} source={products[1]} style={{width: 185, height: 185, borderRadius:25,margin:5}} />: null
                  )}
                  <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:20}}>
                  <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17}}>PRODUCT NAME :</Text>
                  <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17,color:'green'}}>{cartitems[0]}</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17}}>QUANTITY : </Text>
                  <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17,color:'green'}}>{cartitems[1]}</Text>
                  </View>
                  <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17}}>TOTAL PRICE :</Text>
                  <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17,color:'green'}}> {cartitems[2]} RS</Text>
                  </View>
                  </View>
                  </View>
                  </View>
                    
                  )}
                  <View style={{margin:20}}>
                    <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17,margin:5,color:'green'}}>Delivery Details</Text>
                     <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17,margin:5}}> Name : </Text>
                     <View style={{alignItems:'center'}}>
                     <TextInput onChangeText = {this.handlename} style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }}/>
                     </View>
                      <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17,margin:5}}>Contact Number :  </Text>
                      <View style={{alignItems:'center'}}>
                      <TextInput onChangeText = {this.handlenumber} style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }}/>
                      </View>
                      <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17,margin:5}}> Delivery Address : </Text>
                      <View style={{alignItems:'center'}}>
                      <TextInput onChangeText = {this.handleaddress} style={{height: 300,width:300, borderColor: 'gray', borderWidth: 1 }}/>
                      </View>
                      <Button onPress={this.submit} title="Submit"/>
                      <TouchableOpacity onPress={this.submit} style={{alignItems:'center'}}>
                      <View style={{width:90,height:45,backgroundColor:'green',borderRadius:100,justifyContent:'center', alignItems:'center'}}>
                      <Text style={{fontFamily:'new1',fontSize:17,color:'white'}}>Submit</Text>
                      </View>
                      </TouchableOpacity>
                  </View>
                </ImageBackground>
               </ScrollView> 
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

const mapStateToProps= (state)=>{
  return{
      ShopReducer: state.ShopReducer
  }
}
export default connect(mapStateToProps)(Cart);