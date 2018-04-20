import React, {Component} from 'react';
import { StyleSheet, Text, View,ListView  } from 'react-native';

export class Loading extends Component {
    render() {
        return (
                <Text>Cargando...</Text>
        );  
    }
}


export default class ConsultaAPI extends Component {
    render() {
        if(this.props.request){
            var res = this.props.request.map((item,i)=>{
            return (
                  <Text key={i}>{'consultaAPI-'+i} {item.title}</Text>
               );
            })
        }
        return (
            <View>
                <Text>CONSULTA DE LA API</Text>
                {this.props.request ? res : <Loading/>}
            </View>
        );  
    }
}