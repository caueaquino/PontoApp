import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Recover = (props) => {
    const {backRoute} = props;

    return(
        <View style={style.recover} >
            <Text style={style.titleStyle} >
                Recuperação
            </Text>

            <Text style={style.text2Style} >Para recuperar sua senha, preencha o campo abaixo que enviaremos sua nova senha em seu e-mail. </Text>

            <Text style={style.textStyle}>E-mail:</Text>
            <TextInput placeholder="E-mail" style={style.inputStyle}></TextInput>

            <TouchableOpacity style={style.buttonStyle} >
                <Button onPress={() => {backRoute();}} title="Confirmar" color="#D98E04" ></Button>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonStyle} >
                <Button onPress={() => {backRoute();}} title="Voltar" color="#D98E04" ></Button>
            </TouchableOpacity>
        </View>  
    );
}

const style = StyleSheet.create({
    recover: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#244673',
        height: '100%',
        padding: 20,
    },
    titleStyle: {
        color: '#F2E205',
        fontSize: 50,
        marginBottom: 20
    },
    textStyle: {
        color: 'white',
        fontSize: 22,
        minWidth: '90%',
        textAlign: 'left',
        marginBottom: 10
    },
    text2Style: {
        color: 'white',
        fontSize: 20,
        color: 'white',
        width: '80%',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 40
    },
    inputStyle: {
        backgroundColor: '#A0B9D9',
        color: 'white',
        minWidth: '95%',
        paddingLeft: "5%",
        paddingRight: '5%',
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 40
    },
    buttonStyle: {
        marginTop: 18,
        width: '95%',
        borderRadius: 30,
        backgroundColor: '#48592E',
    },
});

export default Recover;

