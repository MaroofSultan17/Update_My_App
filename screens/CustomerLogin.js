import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Styles from "../styles/Styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CustomerLogin() {
    return (
        <ScrollView>
            <View style={[Styles.bgclr, { marginTop: 20 }]}>

                <View style={[Styles.bgclr, { marginTop: 50 }]}>
                    <Text style={[Styles.h1, { fontSize: 24, fontWeight: '400' }]}>
                        Welcome back!
                    </Text>
                    <Text style={[Styles.h2, { textAlign: 'left', marginTop: 67, marginLeft: 37, fontSize: 18, fontWeight: '400' }]}>Login to your account</Text>

                    <View style={{ flex: 1, marginTop: 50, margin: 37, marginBottom: 50 }}>
                        <TextInput placeholder="Enter your name" style={[Styles.TextInputBox, { marginBottom: 47 }]} />
                        <TextInput placeholder="Enter your Password" style={[Styles.TextInputBox, { marginBottom: 21 }]} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name="create-outline" size={25} color="black" />
                                    <Text style={{ fontSize: 12, fontWeight: '400' }}>Remember Me</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12, fontWeight: '400' }}>Forgotten password?</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={Styles.bgclr}>
                        <TouchableOpacity>
                            <Text style={[Styles.btn, Styles.btnTxt, { width: 196, height: 55 }]}> Login </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', margin: 40 }}>OR</Text>

                        <View style={{ alignContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{
                                marginTop: 0,
                                backgroundColor: '#FFFF',
                                color: '#000000',
                                width: 340,
                                height: 55,
                                flexDirection: 'row',
                                alignItems: 'center',
                                fontWeight: '400',
                                fontSize: 14,
                                textAlignVertical: 'center',
                                justifyContent: 'space-evenly',
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#2D4990'
                            }}>
                                <Ionicons name="logo-google" size={30} color="black" />
                                <Text>Log in with your Google account</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </View >
        </ScrollView>
    );
}

