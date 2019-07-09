import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView, AsyncStorage, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");

let deneme;
let deneme2;

class CurrencyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            code: {},
            code2:{}
        }
    }

    async componentDidMount() {
        deneme = await AsyncStorage.getItem('code');
        deneme2 = await JSON.parse(deneme)

        this.setState({
            code: deneme2
        })
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

    storgeSave = async (key) => {

        if (typeof this.state.code === "object") {
            const deneme1 = {
                [key]: key
            }
            Object.assign(this.state.code, deneme1)
        }

        await AsyncStorage.setItem('code', JSON.stringify(this.state.code));
    }

    removeStorage = async (key)=>{
        const curKeys= Object.keys(this.state.code);
        curKeys.map((item,index)=>{
            if (item!==key) {
                const deneme2 = {
                    [item]: item
                }
                Object.assign(this.state.code2, deneme2)
            } 
            
        })
        await AsyncStorage.setItem('code', JSON.stringify(this.state.code2));
    }
    
    render() {

        return (
            <ScrollView>
                {
                    this.state.dataSource && this.state.dataSource.map((item, key) =>
                        <View key={key} style={{ height: 50, width: "100%", borderWidth: 1, borderColor: "red", margin: 5, flexDirection: "row", justifyContent: "space-evenly", alignContent: "center" }}>
                            <Text>
                                {item.name}
                            </Text>
                            <TouchableOpacity onPress={() => this.storgeSave(item.code)}>
                                <View style={{ width: 40, height: "100%", backgroundColor: "green", }}>
                                    <Text>
                                        +
                            </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.removeStorage(item.code)}>
                            <View style={{ width: 40, height: "100%", backgroundColor: "red", }}>
                                    <Text>
                                        -
                            </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </ScrollView>
        )
    }
}
export default CurrencyScreen;