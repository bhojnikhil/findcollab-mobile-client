import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, ListItem, Switch, Content, Card, Footer, FooterTab, Item, Input, CardItem, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Tags from "react-native-tags";
import  FooterC from "./src/components/Footer";
import  Activity from "./src/components/Activity";
import  HeaderTitle from "./src/components/HeaderTitle";
import  Categories from "./src/components/Categories";



class Explore extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
            <Title>Explore</Title>
        </Header>
        <Content searchBar rounded>
        <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Activities" />
          </Item>
          <Text>Featured Categories: </Text>
        <Categories />
          <Text>Recommanded Posts: </Text>
        <Activity />
        <Activity />
        <Activity />
        </Content>
       <Footer>
          <FooterTab>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="paper" />
              <Text>Activities</Text>
            </Button>
            <Button vertical active
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical 
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/715545037325512705/16K2-oZE_bigger.jpg'}} />
                <Body>
                  <Text>Hack the Rice</Text>
                  <Text note>posted on: July 31, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/926/thumb/mlh.png'}} style={{height: 200, width: 200, flex: 1}}/>
                <Tags
                    initialTags={["Mobile Development", "React Native", "React", "Machine Learning", "Tensorflow"]}
                    inputStyle={{ backgroundColor: "white" }}
                  />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded success>
                  <Text>Attending</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


class UserProfile extends React.Component {

  render() {
    const uri = "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Batman-BenAffleck.jpg/200px-Batman-BenAffleck.jpg";
    return (
      <Container>
        <Header />
        <Content>
          <Thumbnail large source={{uri: uri}} />
        <Text>Bruce Wayne</Text>
        <Text>Interests</Text>
        <Tags
                    initialTags={["Mobile Development", "Fitness", "Music", "Arts", "Machine Learning"]}
                    inputStyle={{ backgroundColor: "white" }}
                  />

                  <Text>Points Earned: 289 </Text>
                  <Text>Points Redeemed: 80 </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical 
                          onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="paper"/>
              <Text>Activities</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical active
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical
                          onPress={() => this.props.navigation.navigate('Settings')}>

              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


class Settings extends React.Component {

  render() {

    return (
<Container>
         <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />      
          </Item>  
        </Header>
        
        
        <Content>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="call" />
              </Button>
            </Left>
            <Body>
              <Text>Push Notifications</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="md-help" />
              </Button>
            </Left>
            <Body>
              <Text>Support</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="map" />
              </Button>
            </Left>
            <Body>
              <Text>Location</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="book" />
              </Button>
            </Left>
            <Body>
              <Text>History</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="ios-people" />
              <Text>Activities</Text>
            </Button>
            <Button vertical>
              <Icon active name="jet" />
              <Text>Explore</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}




class Home extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>

        <HeaderTitle />

        </Header>
        <Content searchBar rounded>

        <Activity />

        </Content>
       <Footer>
          <FooterTab>
            <Button vertical active
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="paper" />
              <Text>Activities</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical 
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: Home,
    Explore: Explore,
    Profile: UserProfile,
    Settings: Settings,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}