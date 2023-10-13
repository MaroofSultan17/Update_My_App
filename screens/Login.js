import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Styles from "../styles/Styles";
import Swiper from "../components/Swiper";


export default function Login({ navigation }) {
    return (
        <View style={[Styles.bgclr, { marginTop: 30 }]}>

            <View style={[Styles.bgclr, { borderWidth: 1, borderColor: '#2D4990', margin: 10, borderRadius: 20, padding: 5, alignItems: 'center', marginTop: 30 }]}>
                <Swiper />
            </View>
            <View style={[Styles.bgclr, { margin: 10 }]}>
                <Text style={[Styles.h1, {textAlign: 'center', textAlignVertical: 'center'}]}>Please Select an option</Text>
            </View>
            <View style={{ flex: 1, padding: 10 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('CustomerLogin')}>
                    <Text style={[Styles.btn, Styles.btnTxt]}>
                        Login As Customer
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[Styles.btn, Styles.btnTxt, { marginTop: 40, marginTop:20 , backgroundColor: '#FFFF', color: '#2D4990' }]}>
                        Login As Owner
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
