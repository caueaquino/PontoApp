import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = (props) => {
    const {openDrawer, goBack} = props;
    
     return(
        <View style={style.profile}>
            <View style={style.header} >
                <Button title="☰" color='#D88E04' onPress={() => {openDrawer();}} ></Button>

                <View style={style.rowStyle}>
                    <Text style={style.title1Style}>Ponto</Text>
                    <Text style={style.title2Style}>App</Text>
                </View>
            </View>

            <View style={style.body}>
                <Text style={style.perfil}>Perfil:</Text>
                
                <Text style={style.text}>Nome: Cauê Aquino Nogueira</Text>

                <Text style={style.text}>Email: cauenogueira@alunos</Text>

                <Text style={style.text}>Telefone: 11 964988447</Text>
                                
                <Text style={style.text}>Sexo: Masculino</Text>

                <TouchableOpacity style={style.backButton}>
                    <Button title="VOLTAR" color="#D88E04" onPress={() => {goBack();}}></Button>
                </TouchableOpacity>
            </View>
        </View>
     );
}

const style = StyleSheet.create({
    profile: {
        height: '100%',
        backgroundColor: '#5B12A5',
    },
    perfil: {
        marginTop: 25,
        marginBottom: 10,
        marginLeft: 35,
        color: 'white',
        fontSize: 40,
        width: '100%',
        textAlign: 'left',
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
    text: {
        color: 'white',
        fontSize: 28,
        marginTop:20,
        marginLeft: 15
    },
    backButton: {
        width: '100%',
        marginTop: 50,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title1Style: {
      color: '#F2E205',
      fontSize: 50,
    },
    title2Style: {
        color: 'white',
        fontSize: 50,
    },
    rowStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '88%'
    },
    
});

export default Profile;