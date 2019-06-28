import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

const CurrencyScreen = props => {
    const { navigasyon, data, index } = props;

    return(
        <ScrollView>
            {data.name}
        </ScrollView>
    )
    }
    export default CurrencyScreen;