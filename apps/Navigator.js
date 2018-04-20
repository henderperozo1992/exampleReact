import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight, ListView, AlertIOS, NavigatorIOS,YellowBox} from 'react-native';
import PrimerasPruebas from './apps/PrimerasPruebas'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      value:false,
      consulta: false,
      data: null
     
    };
  }
  render() {
    return (
     
      <NavigatorIOS
          initialRoute={{
            component : RenderListView,
            title : 'Lista de cotizaciones'
          }}
          style={{flex:1,backgroundColor:'#58D3F7'}}
          />
     );
  }
}

export class RenderListView extends Component {
    constructor(props){
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
      }
    
    componentDidMount(){
        var titles = [];
        fetch('http://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson)=>{
          var movies  = responseJson.movies;
          for( var i = 0; i< movies.length;i++){
            titles.push(movies[i].title);
          }
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(titles)
          })
        })
      }
    render() {
        //console.log(this.state.dataSource);
        return ( 
        <View style = {style.container}>
        <ListView 
            enableEmptySections = {true}
            renderRow= {this.renderRow.bind(this)} 
            dataSource = {this.state.dataSource}
            />
        </View>);
        }       
    pressCell(dataRow){
        this.props.navigator.push({
            component:newView,
            passProps: {dataRow},
            title:'Detalles de la cotización'
        });
        //AlertIOS.alert(dataRow);
    }
    renderRow(dataRow){
        return(
        <TouchableHighlight onPress = { () => this.pressCell(dataRow)}>
            <View style = {style.cell}>
             <Text >{dataRow}</Text>
            </View>
        </TouchableHighlight>
        );
    }
}

export class newView extends Component{
 render(){
     return(
       <View style={style.containerStyle}>
            <PrimerasPruebas/>
           <Text> {this.props.dataRow} ESTO ES UNA PRUEBA</Text>
       </View>  
     );
    }
}

const style = new StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    content: {
        padding:0,
        margin:0,
        height:10,
        width:200
    },
    containerStyle:{
        flex:1,
        paddingTop:80 
    },
    cell:{
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#f9f9f9',
        borderBottomWidth:2,
        borderColor:'#eee',
        alignItems:'center',
    }
});

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: 'skyblue'
  
  }
});
