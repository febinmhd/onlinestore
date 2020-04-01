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

class Shop extends Component {
  state = {
    default:'ADD TO CART',
    quantity:1,
    index:null,
    productname:null,
    products:[['rose',require('./images/4.jpg'),'50','0'],
              ['london',require('./images/5.jpg'),'50','0'],
              ['may',require('./images/6.jpg'),'50','0'],
              ['june',require('./images/7.jpg'),'50','0'],
              ['hill',require('./images/10.jpg'),'50','0'],
              ['pete',require('./images/9.jpg'),'50','0'],
              ['clove',require('./images/1.jpg'),'50','0'],
              ['hymn',require('./images/2.jpg'),'50','0'],
              ['escape',require('./images/3.jpg'),'50','0'],
              ['blow',require('./images/11.jpg'),'50','0'],
            ],
    cart:[],
    itemorder:[],
    total:null
}
   
  async quantity (index,val){

    if(val==='+'){ 
      await this.setState({quantity:1})
      await this.setState({productname:this.state.products[index][0]}) 
     await this.setState({total:this.state.products[index][2]*this.state.quantity}) 
      for (let i = 0; i < this.state.cart.length; i++){
        if( this.state.cart[i][0]=== this.state.products[index][0]){
        await this.setState({quantity: this.state.cart[i][1]+1})
        await this.setState({productname: this.state.cart[i][0]})
       await this.setState({total:this.state.products[index][2]*this.state.quantity}) 
       await this.state.cart.splice(i,1) 
        }}  
 
      await this.setState({cart:[...this.state.cart,[this.state.productname, this.state.quantity,this.state.total]]})
      //  console.log(this.state.cart) 
    }
    else{
      await this.setState({quantity:1})
      await this.setState({productname:this.state.products[index][0]})
     await this.setState({total:this.state.products[index][2]*this.state.quantity}) 
      for (let i = 0; i < this.state.cart.length; i++){
        if( this.state.cart[i][0]=== this.state.products[index][0]){
        await this.setState({quantity: this.state.cart[i][1]-1})
        await this.setState({productname: this.state.cart[i][0]})
       await this.setState({total:this.state.products[index][2]*this.state.quantity}) 
       await this.state.cart.splice(i,1) 
        }}  
 
      await this.setState({cart:[...this.state.cart,[this.state.productname, this.state.quantity,this.state.total]]})
        //console.log(this.state.total) 
    }
  }

 render() {
    return (
    <ScrollView>
     <ImageBackground source={require('./images/green.jpg')} style={styles.image}>
      <View>
        <Text style={{textAlign:'center', margin:60}}>HANFEB ARTISM</Text>
    <Text style={{textAlign:'center'}}>{this.state.index}</Text>
    <Text style={{textAlign:'center'}}>{this.state.productname}</Text>
    
    <Text style={{textAlign:'center'}}>{this.state.cart}</Text>
      </View>
      <View style={{ display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
     {this.state.products.map((product,index)=>
      
      <View key={index} style={{ display:'flex',flexDirection:'row',flexWrap:'wrap'}}>

        <View style={{ padding:5}}>
            <Text style={{textAlign:'center',marginBottom:5}}>{product[0]}</Text> 
            <Text>Price : {product[2]}</Text> 
            <Image source={product[1]} style={{width: 185, height: 185, borderRadius:25,margin:5}} />
          <View style={{ display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:5}}>

          {this.state.cart.map((cartitems,index)=>
            cartitems[0]===product[0]? <Text key={index}>Total : {product[2]*cartitems[1]}</Text> : null
            )}


            <Button onPress={(e)=>this.quantity(index,'+')} title="+"/>

            {this.state.cart.map((cartitems,index)=>
            cartitems[0]===product[0]? <Text>Quantity : {cartitems[1]}</Text> : null
            )}
           
 
            <Button onPress={(e)=>this.quantity(index,'-')} title="-"/>
          </View>
        </View>
      </View>)}
      </View>
      
    <View style={styles.container}>
        
      
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
  },
  container: {
    marginTop:100,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: '10'
  },box:{
    width:"100%",
    height:"10vh",
    backgroundColor:"black"
  }
})

export default Shop;
