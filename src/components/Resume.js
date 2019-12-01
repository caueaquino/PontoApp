import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Resume = (props) => {
    
    return(
        <View style={style.resume}>
            <View style={style.hourBank}>
                <Text style={style.text1}>BANCO DE HORAS</Text>
                <Text style={style.text4}>+03:37</Text>
            </View>

            <View>
                <View style={style.recentPoint}>
                    <Text style={style.text1}>PONTOS RECENTES</Text>
                </View>

                <View style={style.pointHour}>
                    <Text style={style.text2}>Ontem 18:01 - Recibo: 00117133674</Text>
                    <Text style={style.text3}>Av. XV de Novembro, 123 Centro, Cornélio Procópio - PR</Text>
                </View>
                
                <View style={style.pointHour}>
                    <Text style={style.text2}>Ontem 12:41 - Recibo: 00117133674</Text>
                    <Text style={style.text3}>Av. XV de Novembro, 123 Centro, Cornélio Procópio - PR</Text>
                </View>
                
                <View style={style.pointHour}>
                    <Text style={style.text2}>Ontem 12:05 - Recibo: 00117133674</Text>
                    <Text style={style.text3}>Av. XV de Novembro, 123 Centro, Cornélio Procópio - PR</Text>
                </View>
                
                <View style={style.pointHour} >
                    <Text style={style.text2}>Ontem 08:01 - Recibo: 00117133674</Text>
                    <Text style={style.text3}>Av. XV de Novembro, 123 Centro, Cornélio Procópio - PR</Text>
                </View>
            </View>

            <View>
                <View style={style.falt}>
                    <Text style={style.text2}>OCORRÊNCIAS</Text>
                    <Text style={style.text2}>FALTAS</Text>
                </View>
                <View style={style.occurrences}>
                    <Text style={style.text3}>Nenhuma ocorrência</Text>
                </View>

                <View style={style.seeoc}>
                    <TouchableOpacity style={style.buttonOccurrences}>
                        <Text style={style.text1}>VER OCORRÊNCIAS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    resume: {
        height: '100%',
        backgroundColor: '#A0B9D9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    seeoc: {
        marginTop: 5,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10
    },
    falt: {
        padding: 5,
        marginBottom: 5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        minWidth: '76%',
        marginTop: 10,
        borderRadius: 10,
    },
    occurrences: {
        backgroundColor: 'white',
        minWidth: '96%',
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    cards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text1: {
        color: '#244673',
        fontSize: 18,
        fontWeight: '700'
    },
    text2: {
        color: 'gray',
        fontSize: 12,
        fontWeight: '600'
    },
    text3: {
        color: 'gray',
        fontSize: 10,
        fontWeight: '600'
    },
    text4: {
        color: '#244673',
        fontSize: 22,
        fontWeight: '900'
    },
    buttonOccurrences: {
        minWidth: '96%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    hourBank: {
        marginTop: 10,
        marginBottom: 10,
        padding: 30,
        width: '96%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    recentPoint: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minWidth: '96%',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 50,
        marginBottom: 5,
    },
    pointHour: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minWidth: '96%',
        borderRadius: 10,
        padding: 20,
        marginBottom: 5,
        backgroundColor: 'white',
    }
});

export default Resume;