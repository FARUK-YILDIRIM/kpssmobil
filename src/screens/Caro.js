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
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import Firebase from '../Firebase';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
const caroWidth = Math.round(Dimensions.get('window').width);

export default class Caro extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      spinner: true,
    };
    console.disableYellowBox = true;
  }

  componentDidMount() {
    Firebase.database()
      .ref('notes')
      .orderByChild('lesson')
      .equalTo(this.props.route.params['lessonCode'])
      .on('value', data => {
        const response = data.toJSON();
        this.setState({entries: _.toArray(response), spinner: false});
      });
  }

  _renderItem({item, index}) {
    return (
      <Content padder>
        <View style={styles.card}>
          <Card>
            <CardItem>
              <Body>
                <Text>{item.knowledge}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button transparent>
                <Text>Paylaş</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 12}}>Yazar: {item.user} ❤️ </Text>
        </View>
      </Content>
    );
  }

  async saveKnowledge(key, data, next) {
    await AsyncStorage.setItem(key, data);
    next;
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
                ]['knowledge'];
                const keyuuid = this.state.entries[this._carousel.currentIndex][
                  'uuid'
                ];
                this.saveKnowledge(keyuuid, valueKnowledge);
                Alert.alert('Disket', 'Kayıt Başarılı...');
              }}>
              <Icon size={20} name="ios-save" />
            </Button>
            <Right style={{paddingRight: 30}}>
              <Button
                transparent
                onPress={() => {
                  console.log(this._carousel.currentIndex);
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
    //justifyContent: 'center',
    marginBottom: 40,
  },
  footer: {
    backgroundColor: '#fff',
  },
});
