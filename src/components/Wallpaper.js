import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {View,StyleSheet, Image, Text,ImageBackground} from 'react-native';
        
import bgSrc from '../images/wallpaper.png';
        
export default class Wallpaper extends Component {
    render() {
        return (
           <View style={styles.container}>
       
       <ImageBackground source={bgSrc} style={styles.picture}>
       {this.props.children}
      </ImageBackground >
            </View>
            );
        }
    }
        
const styles = StyleSheet.create({
    picture: {
    flex: 1,
     width: null,
    height: null,
  
    },
    container: {
        flex: 1,
        },
});
        