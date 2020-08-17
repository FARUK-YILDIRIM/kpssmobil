import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Content, Card, CardItem} from 'native-base';

import LessonList from '../components/LessonList';

function reklamGoster() {
  var a = 0; // 1 yaptığınız zaman dersler kısmında reklam için banner alanı açılır.
  if (a == 1) {
    return (
      <Card>
        <CardItem>
          <Image
            source={{
              uri: '',
            }}
            style={{height: 100, width: null, flex: 1}}
          />
        </CardItem>
      </Card>
    );
  }
}

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {reklamGoster()}
        <Container>
          <Content>
            <View style={{flex: 1}}>
              <LessonList
                navigation={this.props.navigation}
                image={{
                  uri: '', //Derslerin yanında resim göstermek için.
                }}
                title={'Matematik'}
                lesson={'Caro'}
                lessonCode={'mat'} //Firebase'den verileri bu kodlara göre alıyoruz.
              />
              <LessonList
                navigation={this.props.navigation}
                image={{
                  uri: '',
                }}
                title={'Geometri'}
                lesson={'Caro'}
                lessonCode={'geo'}
              />
              <LessonList
                navigation={this.props.navigation}
                image={{
                  uri: '',
                }}
                title={'Tarih'}
                lesson={'Caro'}
                lessonCode={'tar'}
              />
              <LessonList
                navigation={this.props.navigation}
                image={{
                  uri: 'abc',
                }}
                title={'Türkçe'}
                lesson={'Caro'}
                lessonCode={'tr'}
              />
              <LessonList
                navigation={this.props.navigation}
                image={{
                  uri: '',
                }}
                title={'Coğrafya'}
                lesson={'Caro'}
                lessonCode={'cog'}
              />
              <LessonList
                navigation={this.props.navigation}
                image={{
                  uri: '',
                }}
                title={'Vatandaşlık'}
                lesson={'Caro'}
                lessonCode={'vat'}
              />
            </View>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}
