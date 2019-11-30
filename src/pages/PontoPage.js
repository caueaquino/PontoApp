import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Resume from  '../components/Resume';
import Ponto from '../components/Ponto';
import Solicitation from '../components/Solicitation';

const PontoPage = (props) => {
  return(
    <View style={style.view} >
      
      <View style={style.header} >
        <Button title="☰" color='#D88E04' onPress={() => {props.navigation.openDrawer();}} ></Button>

        <View style={style.rowStyle}>
          <Text style={style.title1Style}>Ponto</Text>
          <Text style={style.title2Style}>App</Text>
        </View>
      </View>

      <View style={style.body}>

        <View style={style.selectTab} >
         
          <TouchableOpacity style={style.tab}>
            <Text style={style.textTab}>Resumo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={style.tab}>
            <Text style={style.textTab}>Meu Ponto</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={style.tab}>
            <Text style={style.textTab}>Solicitações</Text>
          </TouchableOpacity>
        
        </View>

        <Resume />
      
        {/* <Ponto /> */}
      
        {/* <Solicitation /> */}
      
      </View>
      
    </View>
  );
}

const style = StyleSheet.create({
    view: {
      height: '100%',
      backgroundColor: 'white'
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
    selectTab: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '100%',
      height: 60,
      backgroundColor: '#48592E'
    },
    tab: {
      backgroundColor: '#A0B9D9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: 17,
      width: '32%',
      textAlign: 'center',
      borderRadius: 5
    },
    textTab: {
      color: 'white',
      fontSize: 16
    },
    body: {
      marginTop: 80
    }
});

export default PontoPage;
