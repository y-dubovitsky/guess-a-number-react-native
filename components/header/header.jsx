import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={{...styles.container, backgroundColor: `${colors.primary}`}}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  }
});

export default Header;