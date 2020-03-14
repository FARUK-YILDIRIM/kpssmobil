import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
  Container,
  Header,
  Left,
  Title,
  Right,
  Button,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Footer,
  FooterTab,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';

const caroWidth = Math.round(Dimensions.get('window').width);

export default class Caro extends Component {
  constructor() {
    super();
    this.state = {
      entries: ['a', 'b', 'c'],
      spinner: false,
    };
    console.disableYellowBox = true;
  }

  _renderItem({item, index}) {
    return (
      <Content padder>
        <View style={styles.card}>
          <Card>
            <CardItem>
              <Body>
                <Text>Bilgi</Text>
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
          <Text style={{fontSize: 12}}>Yazar: User ❤️ </Text>
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
            <Left>
              <Button transparent>
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Türkçe</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} />
              </Button>
            </Right>
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
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>

            <Button transparent>
              <Icon name="ios-save" />
            </Button>
            <Right style={{paddingRight: 30}}>
              <Button
                transparent
                onPress={() => {
                  this._carousel.snapToNext();
                }}>
                <Icon name="ios-arrow-forward" />
              </Button>
            </Right>
          </View>
          <Footer transparent style={styles.footer}>
            <FooterTab>
              <Button>
                <Text>Menu</Text>
              </Button>
              <Button>
                <Text>Menu</Text>
              </Button>
              <Button active>
                <Text>Menu</Text>
              </Button>
              <Button>
                <Text>Menu</Text>
              </Button>
            </FooterTab>
          </Footer>
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
