import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, AsyncStorage } from 'react-native';
import AppRouter from './src/routes/router'

export default class App extends React.Component {
  
  async componentDidMount() {
    let code = {
      USD:"USD",
    }
    await AsyncStorage.setItem('code', JSON.stringify(code));
  }


  render() {
      return (
        <AppRouter ></AppRouter>
      )



    }
  }

const style = {
  
}