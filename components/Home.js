import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import CommonHeader from "./Header";
import { db } from "./config"; // Importing a database connection
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/HomeStyles"; // Importing CSS styles
import { useRoute } from "@react-navigation/native";

export default function Home() {
  const route = useRoute();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [user, setUser] = useState("kulanaka");
  const navigation = useNavigation();
  const userName = route.params && route.params.userName; // Get user name from route parameters

  // Function to handle the search button press
  const handleSearch = () => {
    navigation.navigate("List of Busses", { from, to, userName }); // Navigate to bus list with input parameters
  };

  // Function to handle the "My Credit" button press
  const handleCredit = () => {
    navigation.navigate("MyCredit"); // Navigate to the "My Credit" screen
  };

  const navigateJourneyDetails = () => {
    // Navigate to BusList and pass 'from' and 'to' as route parameters
    navigation.navigate("WebMyJourney", { user });
  };

  return (
    <View style={styles.container}>
      <CommonHeader userName={userName} /> {/* Display common header with the user's name */}
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.tltJourney}>Enter Your Journey</Text>
          <TextInput
            style={[styles.input, { paddingLeft: 25 }]}
            placeholder="From"
            value={from}
            onChangeText={setFrom} // Update "From" input value
          />
          <TextInput
            style={[styles.input, { marginTop: 10, paddingLeft: 25 }]}
            placeholder="To"
            value={to}
            onChangeText={setTo} // Update "To" input value
          />
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search Journey</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.smallRectangle}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/coins.png")}
              style={{ width: 120, height: 120 }}
            />
          </View>
          <View style={styles.textContainer} >
            <Text style={styles.smallRectangleText} onPress={handleCredit}>My Credit</Text>
            <Text style={styles.smallRectanglePara}>
              Check your credit {"\n"}balance and top up
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={navigateJourneyDetails}>
          <View style={styles.smallRectangle}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/train.png")}
                style={{ width: 120, height: 120 }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.smallRectangleText}>My Journeys</Text>
              <Text style={styles.smallRectanglePara}>
                Check your previous {"\n"}journeys
              </Text>
            </View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
