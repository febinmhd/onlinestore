import {createStore} from "redux"

const initialState={
    name:'SHABI',
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

const ShopReducer= (state=initialState,action)=>{
    switch (action.type){
        case "setname":
        state={
            ...state,
            name:action.payload,
        }
        case "setcart":
        state={
            ...state,
            cart:action.payload,
        }
       // return state;
    }
    
    return state;

}

export default ShopReducer;
