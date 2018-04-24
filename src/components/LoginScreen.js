import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import {
  Text,
} from 'react-native';

export default class LoginScreen extends Component {
  constructor() {
    super();
    var handleToUpdateUser  = this.handleToUpdateUser.bind(this);
    var handleToUpdatePass  = this.handleToUpdatePass.bind(this);
    this.state = {
      username:null,
      password:null,
      };
  }
  handleToUpdateUser(someArg){
    this.setState({username:someArg});
  }
  handleToUpdatePass(someArg){
    this.setState({password:someArg});
  }
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Text> {String(this.state.username)} </Text>
        <Text> {String(this.state.password)} </Text>
        <Form user={this.handleToUpdateUser.bind(this)} pass={this.handleToUpdatePass.bind(this)}/>
        <SignupSection />
        <ButtonSubmit user={this.state.username} pass={this.state.password}/>
      </Wallpaper>
    );
  }
}
