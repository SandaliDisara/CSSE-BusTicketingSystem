import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "./config";
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleRegister = () => {
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    if (!name.trim()) {
      setNameError("Name is required");
      return;
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid Email");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Invalid phone number");
      return;
    }
    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }
    addDoc(collection(db, "users"), {
      name: name,
      email: email,
      phone: phone,
      password: password,
    })
      .then(() => {
        console.log("Data submitted");
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        showToast("Registered Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const showToast = (message) => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: message,
      timeout: "3s",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.topicRegT, { opacity: 0.5 }]}>ticketX</Text><br/><br/>
      <Text style={styles.topicReg}><b>Register</b></Text><br/><br/>
      <TextInput
        value={name}
        onChangeText={(name) => {
          setName(name);
        }}
        placeholder="Name"
        style={[styles.input, styles.inputWidth]}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      <br/>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Email"
        style={[styles.input, styles.inputWidth]}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <br/>
      <TextInput
        value={phone}
        onChangeText={(phone) => {
          setPhone(phone);
        }}
        placeholder="Phone Number"
        style={[styles.input, styles.inputWidth]}
      />
      {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
      <br/>
      <TextInput
        value={password}
        onChangeText={(password) => {
          setPassword(password);
        }}
        placeholder="Password"
        secureTextEntry={true} 
        style={[styles.input, styles.inputWidth]}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <br/><br/>
      <TouchableOpacity
        style={[styles.button, styles.inputWidth]}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          <b>Register</b>
        </Text>
      </TouchableOpacity><br/><br/>
      <Text style={styles.whiteText}>Already have an account?</Text><br/>
      <Text style={styles.whiteText} onPress={() => navigation.navigate("Login")} >
        <b>Login</b>
      </Text>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
    fontSize: 65, // Increased font size to 65
    marginTop: "-20%",
  },
  topicReg: {
    color: "white",
    fontSize: 26,
  },
  errorText: {
    color: "red",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    padding: 10,
    borderRadius: 10,
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
