import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Switch, ListView, AlertIOS, Button, NavigatorIOS,YellowBox} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            login : false
        }
    }

    render(){
        return(
            <View style={style.container}>
                <TouchableHighlight 
                style={style.button}>
                    <Button title= 'Login' onPress= {this.props.action.bind(this)}/>
                </TouchableHighlight>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container : {
        flex:1,
        paddingTop:30,
        alignItems:'center',
        justifyContent: 'center'
    },
    button:{
        backgroundColor:'#444',
        width:160,
        alignItems:'center',
        borderRadius:5,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10
    },
    colorBlanco:{
        color:'#fff'
    }
});