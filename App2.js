import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


export default class App extends React.Component {
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

const currency = {
  "USD":{
    currencyName:"",
    currencyCode:"",
    currencyBuyPrice:null,
    currencySellPrice:null,
    currencyChangeRate:null,
  }
}




    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )
    } else {

      const curRates = this.state.dataSource.map((val, key) => {
        if (val.code==="USD") {
            currency.USD.currencyName=val.name
            currency.USD.currencyBuyPrice=val.buyPrice

            return(

              <View key={key} style={styles.container}>
                <Text>
                {currency.USD.currencyName}
                </Text>
                <Text>
                {currency.USD.currencyBuyPrice}
                </Text>
              </View>
            )
            
          }
         }
      )
        return (

          
          <View style={styles.container}>
            {curRates}

          </View>
        )
    


  }
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