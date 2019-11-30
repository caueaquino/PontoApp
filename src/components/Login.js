import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = (props) => {
    const {mainRoute, registerRoute, recoverRoute} = props; 

    return(
        <View style={style.loginStyle}>
            <View style={style.rowStyle}>
                <Text style={style.title1Style}>Ponto</Text>
                <Text style={style.title2Style}>App</Text>
            </View>

            <Text style={style.textStyle}>E-mail:</Text>
            <TextInput placeholder="E-mail" style={style.inputStyle}></TextInput>

            <Text style={style.textStyle}>Senha:</Text>
            <TextInput secureTextEntry={true} placeholder="Senha" style={style.inputStyle}></TextInput>

            <TouchableOpacity style={style.buttonStyle} >
                <Button onPress={() => {mainRoute();}} title="Entrar" color="#D98E04" ></Button>
            </TouchableOpacity>
            
            <TouchableOpacity style={style.buttonStyle} >
                <Button onPress={() => {registerRoute();}} title="Cadastrar-se" fontSize={25} color="#D98E04" ></Button>
            </TouchableOpacity>
            
            <Text onPress={() => {recoverRoute();}} style={style.recoverStyle}>Esqueceu a senha ?</Text>
        </View>
    );
}

const style = StyleSheet.create({
    loginStyle: {
        backgroundColor: "#5C12A6",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    title1Style: {
        color: '#F2E205',
        fontSize: 50,
        marginBottom: 20
    },
    title2Style: {
        color: 'white',
        fontSize: 50,
        marginBottom: 20
    },
    rowStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textStyle: {
        color: 'white',
        fontSize: 22,
        minWidth: '90%',
        textAlign: 'left',
        marginBottom: 10
    },
    inputStyle: {
        backgroundColor: '#7F25D9',
        color: 'white',
        minWidth: '95%',
        paddingLeft: "5%",
        paddingRight: '5%',
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 20
    },
    buttonStyle: {
        marginTop: 10,
        width: '95%',
        borderRadius: 30,
        backgroundColor: '#2F0459',
    },
    recoverStyle: {
        color: '#F2E205',
        textDecorationLine: 'underline',
        marginTop: 30,
        fontSize: 20,
        paddingBottom: 3
    }
});

export default Login;