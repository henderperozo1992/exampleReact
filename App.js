import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight, ListView, AlertIOS, NavigatorIOS,YellowBox} from 'react-native';
import Login from './apps/Login'

export default class App extends Component{
    constructor(props){
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {
            logged : false,
            data : null
        }
    }
    
    componentDidMount(){
        if(this.state.logged){
            fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson)=>{
                this.setState({
                    data:responseJson.movies
                })
            })
        }
    }
    
    getMovie(){
        try {
            response = fetch(
              'https://facebook.github.io/react-native/movies.json'
            );
            responseJson = response.json();
            return responseJson.movies;
          } catch (error) {
            console.error(error);
          }
    }

   handler(){
   
       this.setState({
           logged:true
       })
     
   }
    render(){
        if(this.state.logged){
            a = this.setState({
                data :  this.getMovie.bind(this)
            })
            console.log(this.state.data)
            this.componentDidMount.bind(this);
            var res = this.state.data.map((item,i)=>{
                return (
                      <Text key={i}>{'consultaAPI-'+i} {item.title}</Text>
                   );
                })
            return(
                <View>
                    {a}
                    {res}
                </View>
            );
        }else{
            return(
                <View style={style.container}>
                   <Login action = {this.handler} logged = {this.state.logged}/>
                </View>
            );
        }
        
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