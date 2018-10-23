import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" style={styles.previous}>
          Previous: { this.props.site.side } { this.props.site.part } { this.props.site.quadrant }, {this.props.time.calendar()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  previous: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default PreviousSite;
