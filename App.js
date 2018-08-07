import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { Container, Header, Content, Card, CardItem, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import  FooterC from "./src/components/Footer";
import  Activity from "./src/components/Activity";
import  HeaderTitle from "./src/components/HeaderTitle";


export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
        <HeaderTitle />

        </Header>
        <Content>
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        </Content>
        <FooterC/>
      </Container>
    );
  }
}