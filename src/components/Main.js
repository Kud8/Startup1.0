import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import countResult from '../services/AIService';

export default class Main extends Component {
  _onPressButton() {
    Alert.alert('Твой результат: ' + countResult());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Нажмите на кнопку</Text>
        <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.buttonContainer}>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor: '#FFCCCC',
  },
  instructions: {
    marginTop: 60,
    fontSize: 21
  },
  buttonContainer: {
    marginTop: 60,
    height: 250,
    width: 250,
    borderRadius: 125,
    backgroundColor: '#990000'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})