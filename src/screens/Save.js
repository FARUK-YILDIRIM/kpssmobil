import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Alert} from 'react-native';
import {
  Container,
  Left,
  Right,
  Button,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Header,
  Title,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
const caroWidth = Math.round(Dimensions.get('window').width);

export default class Save extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      spinner: false,
    };
    console.disableYellowBox = true;
  }

  componentDidMount() {
    this.allData();
    this.props.navigation.addListener('focus', this.allData);
  }

  allData = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    console.log(result);
    this.setState({entries: _.toArray(result), spinner: false});
  };

  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  }

  _renderItem({item}) {
    return (
      <Content padder>
        <View style={styles.card}>
          <Card>
            <CardItem>
              <Body>
                <Text>{item[1]}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button transparent>
                <Text>Paylaş</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </Content>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Spinner
          visible={this.state.spinner}
          textContent={'Yükleniyor...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Container style={styles.container}>
          <Header>
            <Body>
              <Title>Kaydedilenler</Title>
            </Body>
          </Header>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={caroWidth}
            itemWidth={caroWidth}
            layout="default"
          />

          <View style={styles.buttons}>
            <Left style={{paddingLeft: 30}}>
              <Button
                transparent
                onPress={() => {
                  this._carousel.snapToPrev();
                }}>
                <Icon size={20} name="ios-arrow-back" />
              </Button>
            </Left>

            <Button
              transparent
              onPress={() => {
                const valueKnowledge = this.state.entries[
                  this._carousel.currentIndex
                ];
                this.removeItemValue(valueKnowledge[0])
                  .then(this.allData())
                  .then(Alert.alert('Çöp Kovası', 'Silindi...'));
              }}>
              <Icon size={20} name="ios-trash" />
            </Button>
            <Right style={{paddingRight: 30}}>
              <Button
                transparent
                onPress={() => {
                  this._carousel.snapToNext();
                }}>
                <Icon size={20} name="ios-arrow-forward" />
              </Button>
            </Right>
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  footer: {
    backgroundColor: '#fff',
  },
});
