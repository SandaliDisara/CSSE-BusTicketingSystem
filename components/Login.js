import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./config.jsx";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { styles } from "../css/LoginStyles"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const showToast = (message) => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: message,
      timeout: "3s",
    });
  };
  const handleLogin = async () => {
    const q = query(collection(db, "users"), where("email", "==", email), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      console.log("User Data:", userData);
      const userId = userDoc.id;
      console.log("Document ID:", userId);
    //   navigation.navigate("ProfileDetails", { userId });
    navigation.navigate("Home", { userName: userData.name });
    } else {
      console.log("User not found.");
      showToast("Invalid Email or Password !");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.topicRegT, { opacity: 0.5 }]}>ticketX</Text><br/><br/><br/><br/>
      <Text style={styles.topicReg}><b>Login</b></Text><br/><br/>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={[styles.input, styles.inputWidth]}
      /><br/>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        style={[styles.input, styles.inputWidth]}
      /><br/><br/><br/>
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText} onPress={handleLogin}><b>Login</b></Text>
      </View><br/>
      <Text style={styles.whiteText}>Don't have an account?</Text><br/>
      <Text onPress={() => navigation.navigate("Register")} style={styles.whiteText}><b>Register</b></Text>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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