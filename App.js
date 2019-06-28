import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AppRouter from './src/routes/router'

export default class App extends React.Component {
  


  render() {
      return (
        <AppRouter ></AppRouter>
      )



    }
  }


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});