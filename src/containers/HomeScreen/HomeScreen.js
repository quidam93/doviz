import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,ScrollView } from 'react-native';
import ExampleScreen from '../ExampleScreen/ExampleScreen';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch('https://api.canlidoviz.com/web/items?marketId=1&type=0')
      .then((Response) => Response.json())
      .then((ResponseJson => {
        this.setState({
          isLoading: false,
          dataSource: ResponseJson,
        })
      }))

      .catch((error) => {
        console.log(error)
      })
  }


  render() {
const { navigate } = this.props.navigation;

    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )
    } else {

      const curRates = this.state.dataSource.map((val, key) => {
        if (val.code==="USD"||val.code==="EUR"||val.code==="GBP") {
          return(
            <ExampleScreen key={key} data={val} index={key} navigasyon={navigate}></ExampleScreen>
          )
        }
            
          
         }
      )
      return (
        <ScrollView horizontal={true} pagingEnabled={true}>
           {curRates}
        </ScrollView>
        )
    


  }
}
}

