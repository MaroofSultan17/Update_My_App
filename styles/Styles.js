import { StyleSheet } from "react-native"
export default Styles = StyleSheet.create({
    bgclr:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 1
    },
    h1:{
        color: 'black',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    h2:{
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    Logo:{
        width: 400,
        height: 300,
        alignSelf: 'center', 
        marginTop: 40
    },
    btn:{
        width: 340,
        height: 55,
        backgroundColor: '#2D4990',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: '#2D4990',
        alignSelf: 'center'
    },
    btnTxt:{
        fontSize: 24,
        color: '#FFFFFFFF',
        fontWeight: '500',
    },
    TextInputBox:{
        width: '100%',
        height: 55,
        borderWidth: 1,
        borderColor: '#2D4990',
        fontSize: 18,
        color: '#000000',
        fontWeight: '400',
        padding: 5,
        borderRadius: 5
    }
})