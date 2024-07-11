import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

let selected = false;

export default function Radio({ leftName, rightName }) {
  const [getBackground, setBackground] = useState("white");
  const [getBackground2, setBackground2] = useState("black");
  const [getColor, setColor] = useState("black")
  const [getColor2, setColor2] = useState("white")

  return (
    <View
      style={[
        styles.sideBySide,
        { justifyContent: "center"},
      ]}
    >
      <TouchableOpacity
        style={[styles.button, { backgroundColor: getBackground}]}
        onPress={async () => {
          if (selected == false) {
            setBackground("black");
            setBackground2("white");
            setColor("white")
            setColor2("black")
            selected = true;
          }
        }}
      >
        <Text style={[styles.text, {color: getColor}]}>{leftName}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: getBackground2 }]}
        onPress={async () => {
          if (selected == true) {
            setBackground("white");
            setBackground2("black");
            setColor("black")
            setColor2("white")
            selected = false;
          }
        }}
      >
        <Text style={[styles.text, {color: getColor2}]}>{rightName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "40%",
    borderWidth: 1,
    borderColor: "black",
    padding: 6,
    borderRadius: 2,
    //backgroundColor:'black'
  },

  text: {
    fontSize: 24,
  },

  sideBySide: {
    flexDirection: "row",
  },
});
