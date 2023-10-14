import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function CommonHeader({ userName }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hello,{"\n"}{userName}</Text>
      {/* <Text style={styles.headerText}>{userName}</Text> */}
      <TouchableOpacity style={styles.menuButton}>
        <View style={styles.menuIconCircle}>
          <FontAwesome name="bars" size={23} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = {
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: -38,
    backgroundColor: "white", 
  },
  headerText: {
    fontSize: 30,
    fontWeight: "500",
  },
  menuButton: {
    padding: 10,
    borderRadius: 30,
  },
  menuIconCircle: {
    backgroundColor: "black",
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
};
