import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/header/header';
import StartGame from './screens/start-game/start-game';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartGame/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
