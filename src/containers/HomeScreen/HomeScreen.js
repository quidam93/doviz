import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, AsyncStorage } from 'react-native';
import ExampleScreen from '../ExampleScreen/ExampleScreen';
import CurrencyScreen from '../CurrencyScreen/CurrencyScreen';
import { NavigationEvents } from 'react-navigation';

let code;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      refresh: 0,
      databaseKeys: {}
    }
  }



  async componentDidMount() {
    code = await AsyncStorage.getItem("code");
    code2 = await JSON.parse(code);
    console.log(code2);



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
  async databaseRefresh() {
    code3 = await AsyncStorage.getItem("code");
    code4 = await JSON.parse(code3);
    console.log("yeni", code4);
    this.setState({
      databaseKeys: code4
    })

  }


  currencyRefresh = (key, key5) => {
    const keys = Object.keys(key5);
    const curRates = this.state.dataSource.map((val, key1) => {
      return (
        keys.map((item, index) => {
          if (val.code === item) {
            return (
              <ExampleScreen key={index} data={val} index={key1} navigasyon={key}></ExampleScreen>
            )
          }
        })
      )
    }
    )
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        {curRates}
      </ScrollView>
    )

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

      if (this.state.refresh === 1) {
        currr = this.currencyRefresh(navigate, this.state.databaseKeys)
      }
      else {
        currr = this.currencyRefresh(navigate, code2)

      }

      return (<View>
        <NavigationEvents
          onDidFocus={() => {
            this.databaseRefresh();
            console.log("yenilendi");
            this.setState({
              refresh: 1
            })
          }
          }
        />
        <View>{currr}</View>
      </View>




      )
    }
  }
}


