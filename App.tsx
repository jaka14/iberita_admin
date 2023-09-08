import React, { useState, useEffect } from 'react';
import { StatusBar, View, StyleSheet, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
           <WebView source={{ uri: 'https://dev.iberita.net/wp-admin' }} style={{ marginTop: 20 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0
  },
})