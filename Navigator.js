import Shop from './Shop.js'
import Cart from './Cart.js'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

const stacknavigator = createStackNavigator({
    ONLINESHOP:Shop,
    ONLINECART:Cart
})

const tabnavigator = createBottomTabNavigator({
        ONLINESHOP:stacknavigator,
        ONLINECART:Cart
})

export default createAppContainer(tabnavigator);