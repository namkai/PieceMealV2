import React, { Component } from 'react';
// import { Body, Button, Icon, Image, View, Card, CardItem, Thumbnail, Text, Left } from 'native-base';
import { Image, Modal, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
import space_rockets from '../assets/space_rockets.jpg';
import sliders from '../assets/food/sliders.jpg';
import Fab from './Fab';

export default class ModalExample extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Content style={{ marginTop: 22 }}>
        <Modal
          animationType={"slide"}
          transparent={false}
          // visible={this.state.modalVisible}
          visible={this.props.visible}
          onRequestClose={() => { alert("Modal has been closed."); }}
        >
        <Content style={{ marginTop: 22 }}>
          <Card style={{ flex: 0 }}>

            <CardItem header style={{ alignSelf: 'center' }}>
              <Text
                style={{ fontFamily: 'Arial', fontSize: 24, marginTop: 20, paddingTop: 15 }}
              >
                {this.props.name.toUpperCase()}
              </Text>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{ resizeMode: 'contain', width: 340, height: 200 }}
                  source={this.props.image}
                />
                <Text style={{ marginTop: 20 }}>
                    {this.props.description}
                </Text>
              </Body>
            </CardItem>

            <CardItem style={{ paddingBottom: 25 }}>
              <Body>
                <Text note>{this.props.notes}</Text>
                {/* <Fab onClose={() => { this.props.setModalVisible(!this.props.visible); }} /> */}
              </Body>
            </CardItem>

              {/* <TouchableHighlight onPress={() => {
                this.props.setModalVisible(!this.props.visible); }}
              >
                <Button
                  onPress={() => { this.props.setModalVisible(!this.props.visible); }}
                >
                <Text>Close</Text>
              </Button>
            </TouchableHighlight> */}
              <Fab onClose={() => { this.props.setModalVisible(!this.props.visible); }} />
            </Card>
          </Content>
        </Modal>
      </Content>
    );
  }
}
