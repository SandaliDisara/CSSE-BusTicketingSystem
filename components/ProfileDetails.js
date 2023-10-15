import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config.jsx";
import Toast from "react-native-toast-message";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../css/ProfileDetailsStyles";

export default function ProfileDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, "users", "5vRaxfipR01QHQquwNhD");
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
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
  }, [route.params]);

  const handleEditProfile = () => {
    navigation.navigate("Profile", { userId: "VsYdTYBamBmAb9I49STU" });
  };

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
