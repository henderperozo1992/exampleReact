import React from 'react';
import { StyleSheet, Text, View, Switch,YellowBox, Image, TextInput , Button, ListView, AlertIOS, NavigatorIOS} from 'react-native';
import ComponenteExterno from './ComponenteExterno'
import ConsultaAPI from './ConsultaAPI'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

export default class PrimerasPruebas extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:false,
      consulta: false,
      data: null
     
    };
  }
  componentDidMount(){
    fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson)=>{
      var movies  = responseJson.movies;
      this.setState({
        data:responseJson.movies
      })
    })
  }
  clicked(){
    this.setState({
      consulta:!this.state.consulta
    })
  }
  render() {
    return (
        <View style={styles.container}>
        <ComponenteExterno/>
        {this.state.consulta ? <ConsultaAPI status = {this.state.status}  request = {this.state.data}/> : null}
      
        <Button title='CLICK PARA CONSULTAR' style={styles.boton} onPress={
          this.clicked.bind(this)
        }/>
        <Text style={{color:'red'}}>ESTADO= {String(this.state.value)}</Text>
        <Text style={{color:'red'}}>Consulta= {String(this.state.consulta)}</Text>
        <Switch value={this.state.value} onValueChange={
          () => this.setState({value:!this.state.value})}/>
          <Image 
          style={{width:100, height:100}} 
          source={{uri:'https://mipagina.do/static/img/rocket-image.png'}}
          />
        <TextInput style={styles.field} placeholder='Escribe aqui lo que quieras'/>
    </View>
      
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems:'center',
  
  },
  container2: {
    flex: 1,
    backgroundColor: 'skyblue'
  
  },
  field: {
    width:200,
    borderRadius: 4,
    borderBottomWidth:2,
    borderColor: '#ddd',
    padding:20,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
  },
  boton:{
    backgroundColor:'#F00',
    color:'#FFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});

