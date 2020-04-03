import React, { Component } from 'react';
import Shopreducer from './Store.js';
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

class Shop extends Component {
  state = {
    default:'ADD TO CART',
    quantity:1,
    index:null,
    productname:null,
    products:[['Flower Pot Mixed',require('./images/4.jpg'),'50','0'],
              ['Orange Flowers',require('./images/5.jpg'),'50','0'],
              ['Red Flower Pot',require('./images/6.jpg'),'50','0'],
              ['june',require('./images/7.jpg'),'50','0'],
              ['Photo Frame Pink',require('./images/10.jpg'),'50','0'],
              ['Pink Roses',require('./images/9.jpg'),'50','0'],
              ['Red Roses',require('./images/1.jpg'),'50','0'],
              ['hymn',require('./images/2.jpg'),'50','0'],
              ['Garden Flowers',require('./images/3.jpg'),'50','0'],
              ['Magenda Flowers',require('./images/11.jpg'),'50','0'],
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

      await this.props.setcart(this.state.cart)
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
      
      await this.props.setcart(this.state.cart)
    }
  }

 render() {
    return (  
    <ScrollView>
     <ImageBackground source={require('./images/new.jpg')} style={styles.image}>
     
      <View>
        <Text style={{textAlign:'center', margin:60, fontFamily:'new',fontSize:45}}>Hanfeb artism</Text>

    <Text style={{textAlign:'center'}}>{this.state.index}</Text>
    <Text style={{textAlign:'center'}}>{this.state.productname}</Text>
    
    <Text style={{textAlign:'center'}}>{this.state.cart}</Text>
      </View>
      <View style={{ display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
     {this.state.products.map((product,index)=>
      
      <View  style={{ display:'flex',flexDirection:'row',flexWrap:'wrap'}}>

        <View key={index} style={{ padding:5}}>
            <Text style={{textAlign:'center',marginBottom:5, fontFamily:'new1',fontSize:20}}>{product[0]}</Text> 
            
           <TouchableOpacity onPress={()=>
            {this.props.navigation.navigate({routeName:'Viewproducts', params:{productname:product[0]}})}}>
              <Image source={product[1]} style={{width: 185, height: 185, borderRadius:25,margin:5}} />
              <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17}}>Price : {product[2]} RS</Text> 
              </TouchableOpacity> 
              <View style={{ display:'flex',flexDirection:'column',justifyContent:'space-around',marginTop:5}}>
            {this.state.cart.map((cartitems,index)=>
            cartitems[0]===product[0]?
            <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17}}>Quantity :{cartitems[1]}</Text> 
            : null
            )}
            {this.state.cart.map((cartitems,index)=>
            cartitems[0]===product[0]? <Text style={{textAlign:'center',fontFamily:'new1',fontSize:17}} key={index}>Total : {product[2]*cartitems[1]} RS</Text> : null
            )}
          </View>
          <View style={{ display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:5}}>
            
            <TouchableOpacity onPress={(e)=>this.quantity(index,'+')}>
        <View style={{width:32,height:32,backgroundColor:'green',borderRadius:100,justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:25,color:'white'}}>+</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={(e)=>this.quantity(index,'-')}>
        <View style={{width:32,height:32,backgroundColor:'green',borderRadius:100,justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:25,color:'white'}}>-</Text>
        </View>
      </TouchableOpacity>
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

const mapStateToProps= (state)=>{
    return{
        ShopReducer: state.ShopReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    setname:(name)=>{
      dispatch({
        type:"setname",
        payload:name
      })
    },
    setcart:(cart)=>{
      dispatch({
        type:"setcart",
        payload:cart
      })
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);