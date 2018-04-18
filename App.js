import React from 'react';
import { StyleSheet, Text, View, Switch, Image, TextInput  } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:true
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text style={{color:'red'}}>ESTADO= {String(this.state.value)}</Text>
        <Text>ESTO ES UNA PRUEBA</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
    alignContent:'flex-start',
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
});
