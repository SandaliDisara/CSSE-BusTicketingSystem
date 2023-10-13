import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"; // Import TextInput
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "./config";

export default function CRUD() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  function create() {
    //submit data
    addDoc(collection(db, "users"), {
      username: username,
      email: email,
    })
      .then(() => {
        console.log("data submitted");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      <Text>Firebase CRUD</Text>
      <TextInput
        value={username}
        onChangeText={(username) => {
          setName(username);
        }}
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        style={styles.input}
        placeholder="Email"
      />

      <StatusBar style="auto" />

      <TouchableOpacity onPress={create}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Correct the background color
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
  },
});
