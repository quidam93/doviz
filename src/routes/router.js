import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';


import HomeScreen from '../containers/HomeScreen/HomeScreen';
import CurrencyScreen from '../containers/CurrencyScreen/CurrencyScreen';
import ExampleScreen from '../containers/ExampleScreen/ExampleScreen';


const appStack= createStackNavigator(
    {
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions: {
            header: null,
          }
    },
    CurrencyScreen:{
        screen:CurrencyScreen
    },
    
    
})



const AppRouter=createAppContainer(appStack);

export default AppRouter;