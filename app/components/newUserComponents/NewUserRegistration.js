import React, { Component } from 'react';

import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class NewUserRegistration extends Component {
    render() {
        return (
            <View>
                <Text style={styles.titleText}>
                    Start{"\n"}
                    Point
                </Text>
                <Button
                  title="Scan I.D to Start"
                  color="#841584"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});