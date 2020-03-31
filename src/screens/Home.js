import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Header, Content, Body, Title} from 'native-base';

import LessonList from '../components/LessonList';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{flex: 1}}>
            <LessonList
              navigation={this.props.navigation}
              image={{
                uri: '',
              }}
              title={'Matematik'}
              lesson={'Caro'}
              lessonCode={'mat'}
            />
            <LessonList
              navigation={this.props.navigation}
              image={{
                uri: '',
              }}
              title={'Türkçe'}
              lesson={'Caro'}
              lessonCode={'tr'}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
