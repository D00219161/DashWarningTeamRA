import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 14,
    width: "46%",
    height: 30,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default CButton;