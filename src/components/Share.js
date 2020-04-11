import React, {Component} from 'react';
import {Share, View, Button} from 'react-native';

class SharePost extends Component {
  onShare = async () => {
    try {
      await Share.share({
        message: this.props.knowledge,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View>
        <Button onPress={this.onShare} title="Paylaş" />
      </View>
    );
  }
}

export default SharePost;
