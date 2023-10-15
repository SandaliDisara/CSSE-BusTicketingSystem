import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { collection, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config.jsx";
import Toast from "react-native-toast-message";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProfileDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setName(userData.name);
          setEmail(userData.email);
          setPhone(userData.phone);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    if (route.params?.updatedName) {
      setName(route.params.updatedName);
    }
    if (route.params?.updatedEmail) {
      setEmail(route.params.updatedEmail);
    }
    if (route.params?.updatedPhone) {
      setPhone(route.params.updatedPhone);
    }
    fetchData();
  }, [userId, route.params]);
  const handleEditProfile = () => {
    navigation.navigate("Profile", { userId });
  };
  const handleDelete=() =>{
    deleteDoc(doc(db, "users", userId))
      .then(() => {
        console.log("data deleted");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.topicReg}>
        <b>Hi, {name}</b>
      </Text><br/>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          style={[styles.input, styles.inputWidth]}
          editable={false}
          selectable={false}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          style={[styles.input, styles.inputWidth]}
          editable={false}
          selectable={false}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          value={phone}
          style={[styles.input, styles.inputWidth]}
          editable={false}
          selectable={false}
        />
      </View><br /><br />
      <View style={[styles.button, styles.inputWidth]}>
        <Text onPress={handleEditProfile} style={styles.buttonText}>
          <b>Edit Profile Data</b>
        </Text>
      </View>
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText} onPress={handleDelete }>
          <b>Delete Profile</b>
        </Text>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  label: {
    color: "black",
    width: 120,
  },
  topicReg: {
    color: "black",
    fontSize: 30,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    color: "black",
    padding: 10,
    borderRadius: 10,
  },
  inputWidth: {
    width: "80%",
  },
  whiteText: {
    color: "black",
  },
  button: {
    width: "80%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingTop: 10,
  },
});
