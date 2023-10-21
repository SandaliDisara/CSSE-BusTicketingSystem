import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from "react-native";
import { collection, query, where, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config.jsx"; // Importing a database connection
import Toast from "react-native-toast-message"; // Importing a toast message component
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Profile() {
  const [name, setName] = useState(""); // State to store user's name
  const [email, setEmail] = useState(""); // State to store user's email
  const [phone, setPhone] = useState(""); // State to store user's phone number
  const navigation = useNavigation(); // Accessing navigation for screen transition
  const route = useRoute(); // Accessing route information to get userId

  // Fetch user data from the database based on name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userQuery = query(collection(db, "users"), where("name", "==", "Mehara")); // Query to find the user by name
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data(); // Get user data
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

  // Reload the page when the user's profile is updated
  useEffect(() => {
    if (route.params?.profileUpdated) {
      window.location.reload();
    }
  }, [route.params?.profileUpdated]);

  // Handle updating user data
  const handleUpdate = () => {
    updateDoc(doc(db, "users", "5vRaxfipR01QHQquwNhD"), { // Update user data based on the document ID
      name: name,
      email: email,
      phone: phone,
    })
      .then(() => {
        showToast("User Details Updated Successfully");
        // Navigate to "ProfileDetails" and pass updated user information as parameters
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

  // Function to show a toast message
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
