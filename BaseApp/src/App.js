import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import ActionServices from './actions/ActionServices'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ActionServices />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
