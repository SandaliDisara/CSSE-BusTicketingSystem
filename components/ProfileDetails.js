import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config.jsx"; // Importing a database connection
import Toast from "react-native-toast-message"; // Importing a toast message component
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../css/ProfileDetailsStyles"; // Importing styles for this component

export default function ProfileDetails() {
  const [name, setName] = useState(""); // State to store user's name
  const [email, setEmail] = useState(""); // State to store user's email
  const [phone, setPhone] = useState(""); // State to store user's phone number
  const navigation = useNavigation(); // Accessing navigation for screen transition
  const route = useRoute(); // Accessing route information to get userId

  // Fetch user data from the database and update the component's state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, "users", "5vRaxfipR01QHQquwNhD"); // Reference to the user document
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data(); // Get user data
          setName(userData.name);
          setEmail(userData.email);
          setPhone(userData.phone);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    // Update the component's state if there's updated data from route params
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
  }, [route.params]);

  // Handle navigation to the "Profile" screen for editing user data
  const handleEditProfile = () => {
    navigation.navigate("Profile", { userId: "VsYdTYBamBmAb9I49STU" });
  };

  // Handle user data deletion and navigate to the "Login" screen
  const handleDelete = () => {
    deleteDoc(doc(db, "users", "5vRaxfipR01QHQquwNhD"))
      .then(() => {
        console.log("Data deleted");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../assets/bck.png")} style={{ width: 50, height: 50, marginTop: 8, marginLeft: 3 }} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.topicReg}>
          <b>Hi, {name}</b>
        </Text>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            value={name}
            style={[styles.input, styles.inputWidth]}
            editable={false} // Make the input field non-editable
            selectable={false} // Make the text non-selectable
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            value={email}
            style={[styles.input, styles.inputWidth]}
            editable={false} // Make the input field non-editable
            selectable={false} // Make the text non-selectable
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            value={phone}
            style={[styles.input, styles.inputWidth]}
            editable={false} // Make the input field non-editable
            selectable={false} // Make the text non-selectable
          />
        </View>

        <View style={[styles.button, styles.inputWidth]}>
          <Text onPress={handleEditProfile} style={styles.buttonText}>
            <b>Edit Profile Data</b>
          </Text>
        </View>
        <View style={[styles.button, styles.inputWidth]}>
          <Text style={styles.buttonText} onPress={handleDelete}>
            <b>Delete Profile</b>
          </Text>
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </View>
  );
}
