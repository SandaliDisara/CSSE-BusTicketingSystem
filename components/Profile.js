import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from "react-native";
import { collection, query, where, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config.jsx";
import Toast from "react-native-toast-message";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userQuery = query(collection(db, "users"), where("name", "==", "Mehara"));
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setName(userData.name);
          setEmail(userData.email);
          setPhone(userData.phone);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    if (route.params?.profileUpdated) {
      window.location.reload();
    }
  }, [route.params?.profileUpdated]);

  const handleUpdate = () => {
    updateDoc(doc(db, "users", "5vRaxfipR01QHQquwNhD"), {
      name: name,
      email: email,
      phone: phone,
    })
      .then(() => {
        showToast("User Details Updated Successfully");
        navigation.navigate("ProfileDetails", {
          userId,
          updatedName: name,
          updatedEmail: email,
          updatedPhone: phone,
        });
      })
      .catch((error) => {
        console.error("Error updating user data: ", error);
      });
  };

  const showToast = (message) => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: message,
      visibilityTime: 3000,
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileDetails")}>
        <Image source={require("../assets/bck.png")} style={{ width: 50, height: 50, marginTop: "8%", marginLeft: "3%" }} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.topicReg}>
          <b>{name}</b>
        </Text>
        <br /> <br /> <br /> <br /><br />
        <TextInput
          value={name}
          placeholder="Name"
          onChangeText={setName}
          style={[styles.input, styles.inputWidth]}
        />
        <br /> <br />
        <TextInput
          value={email}
          placeholder="Email"
          onChangeText={setEmail}
          style={[styles.input, styles.inputWidth]}
        />
        <br /><br />
        <TextInput
          value={phone}
          placeholder="Phone Number"
          onChangeText={setPhone}
          style={[styles.input, styles.inputWidth]}
        />
        <br /> <br />
        <View style={[styles.button, styles.inputWidth]}>
          <Text style={styles.buttonText} onPress={handleUpdate}>
            <b>Save Changes</b>
          </Text>
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
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
  topicReg: {
    color: "black",
    fontSize: 30,
    marginTop: "-15%",
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
  button: {
    width: "80%",
    backgroundColor: "black",
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    marginTop: "1%",
    textAlign: "center",
    paddingTop: 10,
  },
});
