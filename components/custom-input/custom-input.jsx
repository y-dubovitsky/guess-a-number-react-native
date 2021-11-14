import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = (props) => {
  return (
    <TextInput {...props} style={styles.container}/>
  )
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    width: '80%',
    padding: 5,
    marginVertical: 5,
    textAlign: 'center'
  }
});

export default CustomInput;