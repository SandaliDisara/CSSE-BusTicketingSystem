import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./config.jsx";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const q = query(collection(db, "users"), where("email", "==", email), where("password", "==", password));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      console.log("User Data:", userData);
      
      // Log the document ID
      const userId = userDoc.id;
      console.log("Document ID:", userId);

      // Navigate to ProfileDetails with the user ID as a parameter
      navigation.navigate("ProfileDetails", { userId });
    } else {
      console.log("User not found.");
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  topicRegT: {
    color: "white",
    fontSize: 65,
    marginTop: "-20%",
  },
  topicReg: {
    color: "white",
    fontSize: 26,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    padding: 10,
    borderRadius: 10
  },
  inputWidth: {
    width: "80%",
  },
  whiteText: {
    color: "white",
  },
  button: {
    width: "80%",
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    alignItems: "center",
    marginTop: "1%",
    textAlign: "center",
    paddingTop: 10,
  },
});
