import React, { Component } from 'react'
import { View } from 'react-native'
import Shop from './Shop.js'
import Tabnavigator from './Navigator.js'
import {createStore, combineReducers} from 'redux'
import ShopReducer from './Store.js'
import {Provider} from 'react-redux'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'


const rootreducer = combineReducers({
  ShopReducer
});

const store= createStore(rootreducer);

const fetchFonts=()=>{
  return Font.loadAsync({
    'myfav':require('./fonts/Pacifico-Regular.ttf'),
    'new':require('./fonts/Courgette-Regular.ttf'),
    'new1':require('./fonts/Merienda-Bold.ttf')
  })
}

export default class App extends Component {


state={
  dataloaded:false
}

  render() {

    if(!this.state.dataloaded){
      return <AppLoading startAsync={fetchFonts} onFinish={()=>this.setState({dataloaded:true})}/>
    }

    return <Provider store={store}>
      <Tabnavigator/>
      </Provider>;
  }
}
