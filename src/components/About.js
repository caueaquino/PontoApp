import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const About = (props) => {
    const {openDrawer, goBack} = props;

    return(
        <View style={style.about} >
                
            <View style={style.header} >
                <Button title="☰" color='#F2C12E' onPress={() => {openDrawer();}} ></Button>

                <View style={style.rowStyle}>
                    <Text style={style.title1Style}>Ponto</Text>
                    <Text style={style.title2Style}>App</Text>
                </View>
            </View>

            <View style={style.body}>
                <Text style={style.titleStyle3}>Sobre:</Text>

                <Text style={style.textStyle}>
                    O PontoApp é um aplicativo aplicativo desenvolvido para facilitar a sua vida, ele tem como propósito gerir seu banco de horas, ponto eletrônico e jornada de trabalho.
                </Text>

                <Text style={style.textStyle}>
                    Este aplicativo foi desenvolvido por Cauê Aquino Nogueira durante a disciplina de desenvolvimento mobile na faculdade tecnológica federal do paraná, no curso para graduação emBbacharelado de Engenharia de Software.
                </Text>
                
                <TouchableOpacity style={style.backButton}>
                    <Button title="VOLTAR" color="#F2C12E" onPress={() => {goBack();}}></Button>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style =  StyleSheet.create({
    about: {
        backgroundColor: '#A0B9D9',
        height: '100%',
    },
    header: {
      padding: 10,
      position: 'absolute',
      width: '100%',
      height: 80,
      backgroundColor: '#244673',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    body: {
      marginTop: 80
    },
    title1Style: {
      color: '#F2E205',
      fontSize: 50,
    },
    title2Style: {
        color: 'white',
        fontSize: 50,
    },
    titleStyle3: {
        color: 'white',
        fontSize: 36,
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 10,
    },
    textStyle: {
        color: 'white',
        fontSize: 18,
        margin: 10
    },
    rowStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '88%'
    },
    backButton: {
        width: '100%',
        marginTop: 50,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default About;