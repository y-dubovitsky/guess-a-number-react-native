import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({children, style, ...rest}) {
  return (
    <View style={{...styles.container, ...style}}>{children}</View>
  )
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10
  }
});

