import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/Styles";



export default function WelCome({ navigation }) {
    return (
        <View style={Styles.bgclr}>
            <View style={[Styles.bgclr, { margin: 50, alignContent: 'center', alignItems: 'center' }]}>
                <Text style={[Styles.h1, { marginTop: 50, position: 'absolute' }]}>
                    Welcome To
                </Text>

                <View style={{ flex: 1 }}>
                    <Image
                        style={Styles.Logo}
                        source={require('./pics/Logo.png')} />
                </View>

                <Text style={Styles.h2}>
                    We are Available to serve you for any thing for repairing
                </Text>
            </View>

            <View style={[Styles.bgclr, { alignContent: 'center', alignItems: 'center' }]}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={[Styles.btn, Styles.btnTxt, { margin: 40, marginTop: 100, marginBottom: 20 }]}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={[Styles.btn, Styles.btnTxt, { margin: 40, marginTop: 0, backgroundColor: '#FFFF', color: '#2D4990' }]}> SignUp </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
