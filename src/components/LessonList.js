import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Card, CardItem, Text, Col, Grid} from 'native-base';
export default class LessonList extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(this.props.lesson, {
            lessonCode: this.props.lessonCode,
          })
        }>
        <Card>
          <CardItem cardBody>
            <Grid>
              <Col>
                <Image
                  source={this.props.image}
                  style={{height: 100, width: null}}
                />
              </Col>
              <Col>
                <Text style={styles.text}>{this.props.title}</Text>
              </Col>
            </Grid>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = {
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
};
