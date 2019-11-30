import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Picker } from 'react-native';

const Register = (props) => {
    const {backRoute} = props;

    return(
      <View style={style.register} >
            <Text style={style.titleStyle} >
                Cadastro
            </Text>
            
            <Text style={style.text2Style} >
                Preencha os campos abaixo:
            </Text>

            <Text style={style.textStyle}>Nome:</Text>
            <TextInput placeholder="Nome" style={style.inputStyle}></TextInput>

            <Text style={style.textStyle}>Email:</Text>
            <TextInput placeholder="Email" style={style.inputStyle}></TextInput>

            <Text style={style.textStyle}>Senha:</Text>
            <TextInput secureTextEntry={true} placeholder="Senha" style={style.inputStyle}></TextInput>
          
            <Text style={style.textStyle} >Sexo:</Text>
            <Picker style={style.inputStyle}>
                <Picker.Item label="Masculino" value="0" />
                <Picker.Item label="Feminino" value="1" />
            </Picker>

            <TouchableOpacity style={style.buttonStyle} >
                <Button onPress={() => {backRoute();}} title="Confirmar" color="#D98E04" ></Button>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonStyle} >
                <Button onPress={() => {backRoute();}} title="Cancelar" color="#D98E04" ></Button>
            </TouchableOpacity>
      </View>  
    );
}

const style = StyleSheet.create({
    register: {
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
        fontSize: 20,
        minWidth: '90%',
        textAlign: 'left',
        marginBottom: 10
    },
    text2Style: {
        color: 'white',
        fontSize: 20,
        color: 'white',
        minWidth: '90%',
        textAlign: 'center',
        marginBottom: 20
    },
    inputStyle: {
        backgroundColor: '#A0B9D9',
        color: 'white',
        minWidth: '95%',
        paddingLeft: "5%",
        paddingRight: '5%',
        borderRadius: 5,
        fontSize: 18,
        marginBottom: 20
    },
    buttonStyle: {
        marginTop: 15,
        width: '95%',
        borderRadius: 30,
        backgroundColor: '#48592E',
    },
});

export default Register;

