import React, {Component} from 'react';
import { StyleSheet, Text, View,ListView,TouchableHighlight,AlertIOS  } from 'react-native';

export default class RenderListView extends Component {
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
        AlertIOS.alert(dataRow);
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

const style = new StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#58D3F7'
    },
    content: {
        padding:0,
        margin:0,
        height:10,
        width:200
    },
    cell:{
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#AAA',
        borderBottomWidth:2,
        borderColor:'#000',
        alignItems:'center',
    }
});