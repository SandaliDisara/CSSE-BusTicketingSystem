import React from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/ProfileDetailsStyles";

export default function ViewProfile() {
  // Sample user data (replace with actual user data)
  const name = "Test User";
  const email = "test@gmail.com";
  const phone = "0998765432";
  const navigation = useNavigation();

  // Function to navigate to the profile edit screen
  const handleEditProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topicReg}>
        <b>Hi, {name}</b>
      </Text>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          style={[styles.input, styles.inputWidth]}
          editable={false} // Make the field read-only
          selectable={false} // Disable text selection
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
      <br/><br/>

      {/* Button to navigate to the profile edit screen */}
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText}>
          <b>Edit Profile Data</b>
        </Text>
      </View>
      <br/>

      {/* Button to delete user profile data (you can implement this functionality) */}
      <View style={[styles.button, styles.inputWidth]}>
        <Text style={styles.buttonText}>
          <b>Delete Profile Data</b>
        </Text>
      </View>
    </View>
  );
}
