import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView,StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

const ExampleScreen = props => {
    const { navigasyon, data, index } = props;
    const dailyChange = data.dailyChangePercentage * 100;

    if (data.buyPrice.toFixed(2) === 0) {
        return null
    }
    const navigate = (path) => {
        navigasyon(path);
      }

    return (
        <SafeAreaView style={{ width: width, height: height, alignItems: "center", justifyContent: "center", backgroundColor: "#c7c1b7" }}>
            {data.dailyChangePercentage >= 0 ? (
                <LinearGradient colors={['#edffe2', '#c9ffa8', '#76ea2e']} style={{ width: width * 0.9, height: height * 0.9, borderRadius: 75, }}>
                    <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 12, }, shadowOpacity: 0.58, shadowRadius: 16.00, elevation: 24, }}>
                        <Text style={{ fontSize: 38, fontWeight: "bold", fontFamily: "Cochin", alignSelf: "center", paddingTop: 30 }}>{data.name}</Text>
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                            <View style={{ width: width * 0.9 / 2, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700" }}>Alış Fiyatı</Text>
                                <Text style={{ fontSize: 24, fontFamily: "Cochin", paddingTop: 10 }}>{data.buyPrice.toFixed(3)}</Text>
                            </View>
                            <View style={{ width: width * 0.9 / 2, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700" }}>Satış Fiyatı</Text>
                                <Text style={{ fontSize: 24, fontFamily: "Cochin", paddingTop: 10 }}>{data.sellPrice.toFixed(3)}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700", alignSelf: "center", paddingTop: 15 }}>Günlük Değişim</Text>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <View style={{ flexDirection: "row", alignSelf: "center", paddingTop: 5 }}>
                                <MaterialIcons name="arrow-upward" style={{ fontSize: 32, color: "green" }}></MaterialIcons>
                                <Text style={{ fontSize: 32, fontFamily: "Cochin" }}>%{dailyChange.toFixed(2)}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700", alignSelf: "center", paddingTop: 25 }}>Günlük Değerler</Text>

                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                    Min Alış 
                                    </Text>
                                <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayLowestBuyPrice.toFixed(2)}</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                    Min Satış 
                                    </Text>
                                <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayLowestSellPrice.toFixed(2)}</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                    Maks Alış 
                                    </Text>
                                <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayHighestBuyPrice.toFixed(2)}</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                    Maks Satış 
                                    </Text>
                                <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayHighestSellPrice.toFixed(2)}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>navigate("CurrencyScreen")} style={{ width: 100, height: 100, alignSelf: "center", borderRadius: 50, paddingTop: 15, alignItems: "center", justifyContent: "center" }}>
                            <MaterialIcons name="dehaze" style={{ fontSize: 48, color: "white", opacity: 1 }} ></MaterialIcons>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            ) : (
                    <LinearGradient colors={['#ffeaea', '#ffbfbf', '#db0d0d']} style={{ width: width * 0.9, height: height * 0.9, borderRadius: 75, }}>
                        <View style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 12, }, shadowOpacity: 0.58, shadowRadius: 16.00, elevation: 24, }}>
                            <Text style={{ fontSize: 38, fontWeight: "bold", fontFamily: "Cochin", alignSelf: "center", paddingTop: 30 }}>{data.name}</Text>
                            <View style={{ flexDirection: "row", paddingTop: 20 }}>
                                <View style={{ width: width * 0.9 / 2, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700" }}>Alış Fiyatı</Text>
                                    <Text style={{ fontSize: 24, fontFamily: "Cochin", paddingTop: 10 }}>{data.buyPrice.toFixed(3)}</Text>
                                </View>
                                <View style={{ width: width * 0.9 / 2, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700" }}>Satış Fiyatı</Text>
                                    <Text style={{ fontSize: 24, fontFamily: "Cochin", paddingTop: 10 }}>{data.sellPrice.toFixed(3)}</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700", alignSelf: "center", paddingTop: 15 }}>Günlük Değişim</Text>
                            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                                <View style={{ flexDirection: "row", alignSelf: "center", paddingTop: 5 }}>
                                    <MaterialIcons name="arrow-downward" style={{ fontSize: 32, color: "red" }}></MaterialIcons>
                                    <Text style={{ fontSize: 32, fontFamily: "Cochin" }}>%{dailyChange.toFixed(2)}</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 24, fontFamily: "Cochin", fontWeight: "700", alignSelf: "center", paddingTop: 25 }}>Günlük Değerler</Text>

                            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                    <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                        Min Alış
                                    </Text>
                                    <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayLowestBuyPrice.toFixed(2)}</Text>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                    <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                        Min Satış
                                    </Text>
                                    <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayLowestSellPrice.toFixed(2)}</Text>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                    <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                        Maks Alış
                                    </Text>
                                    <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayHighestBuyPrice.toFixed(2)}</Text>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
                                    <Text style={{ fontSize: 22, fontFamily: "Cochin", fontWeight: "500", paddingTop: 25 }}>
                                        Maks Satış
                                    </Text>
                                    <Text style={{ fontSize: 20, fontFamily: "Cochin", paddingTop: 5 }}>{data.todayHighestSellPrice.toFixed(2)}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>navigate("CurrencyScreen")} style={{ width: 100, height: 100, alignSelf: "center", borderRadius: 50, paddingTop: 15, alignItems: "center", justifyContent: "center" }}>
                                <MaterialIcons name="dehaze" style={{ fontSize: 48, color: "white", opacity: 1 }} ></MaterialIcons>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                )}
        </SafeAreaView>

    )
}



export default ExampleScreen;