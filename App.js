/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  NativeModules,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const turnOn = () => {
    NativeModules.Bulb.turnOn();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Light App!!</Text>
        <TouchableOpacity
          style={{height: 400, width: 300, backgroundColor: 'red'}}
          onPress={turnOn}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
