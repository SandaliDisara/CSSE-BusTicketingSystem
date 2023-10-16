import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./config.jsx"; // Importing a database connection
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; // Importing a toast message component
import { styles } from "../css/LoginStylesWeb.js" // Importing CSS styles

export default function LoginWeb() {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [userData, setUserData] = useState(null); // State to store user data
  const navigation = useNavigation(); // Accessing navigation for screen transition

  // Function to show a toast message
  const showToast = (message) => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: message,
      timeout: "3s",
    });
  };

  // Function to handle the login process
  const handleLogin = async () => {
    const q = query(
      collection(db, "users"), // Specify the collection in the database
      where("email", "==", email), // Filter users where email matches
      where("password", "==", password) // Filter users where password matches
    );

    const querySnapshot = await getDocs(q); // Execute the query

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data(); // Get user data
      console.log("User Data:", userData);
      const userId = userDoc.id; // Get the user's document ID
      console.log("Document ID:", userId);

      // Navigate to the "Home" screen and pass the user's name as a parameter
      navigation.navigate("Home", { userName: userData.name });
    } else {
      console.log("User not found.");
      showToast("Invalid Email or Password !"); // Show a toast message for invalid login
      setEmail("");
      setPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.topicRegT, { opacity: 0.5 }]}>ticketX</Text>
      <br />
      <br />
      <br />
      <br />
      <Text style={styles.topicReg}>
        <b>Login</b>
      </Text>
      <br />
      <br />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={[styles.input, styles.inputWidth]}
      />
      <br />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        style={[styles.input, styles.inputWidth]}
      />
      <br />
      <br />
      <br />
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText} onPress={handleLogin}>
          <b>Login</b>
        </Text>
      </View>
      <br />
      <Text style={styles.whiteText}>Don't have an account?</Text>
      <br />
      <Text
        onPress={() => navigation.navigate("Register")} // Navigate to the "Register" screen
        style={styles.whiteText}
      >
        <b>Register</b>
      </Text>
      <Toast ref={(ref) => Toast.setRef(ref)} /> {/* Set the reference for the toast component */}
      {userData && (
        <View>
          <Text>Login Successfully</Text>
          <Text>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Phone: {userData.phone}</Text>
        </View>
      )}
    </View>
  );
}
