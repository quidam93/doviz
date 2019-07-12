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

    removeStorage = async (key) => {
        refreshedStorage = await AsyncStorage.getItem('code');
        refreshedStorage2 = await JSON.parse(refreshedStorage)
        this.setState({
            code: refreshedStorage2
        })
        const prop = key
        const newCode = Object.keys(this.state.code).reduce((object, key) => {
            if (key !== prop) {
                object[key] = this.state.code[key]
            }
            return object
        }, {})
        this.setState({
            code: newCode
        })
        await AsyncStorage.setItem('code', JSON.stringify(this.state.code));
    }
    render() {

        return (
<SafeAreaView style={{backgroundColor:"#d1ffff"}}>
    <ScrollView>
        {
        this.state.dataSource && this.state.dataSource.map((item, key) =>
        <LinearGradient key={key} colors={['#d1ffff', "#a5f2f2", '#d1ffff']}>
            <View  style={{ flex: 1, height: 50, width: "100%",borderBottomWidth:1,borderBottomColor:"#334242" ,margin: 5, flexDirection: "row" }}>
                <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ alignSelf: "baseline", paddingLeft: 10, fontFamily: "Cochin", fontSize: 22 }}>
                        {item.name}
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => this.storgeSave(item.code)}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#d5ffad", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                +
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.removeStorage(item.code)}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#ff4f6f", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                -
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
        )
        }
    </ScrollView>
</SafeAreaView>

        )
    }
}
export default CurrencyScreen;