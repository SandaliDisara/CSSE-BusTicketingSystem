import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import CommonHeader from "./Header";
import { db } from "./config";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [user, setUser] = useState("Kulanaka");
  const navigation = useNavigation();

  const handleSearch = () => {
    // Navigate to BusList and pass 'from' and 'to' as route parameters
    navigation.navigate("List of Busses", { from, to });
  };

  const navigateJourneyDetails = (user) => {
    // Navigate to BusList and pass 'from' and 'to' as route parameters
    navigation.navigate("WebMyJourney");
  };

  return (
    <View style={styles.container}>
      <CommonHeader />
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.tltJourney}>Enter Your Journey</Text>
          <TextInput
            style={[styles.input, { paddingLeft: 25 }]}
            placeholder="From"
            value={from}
            onChangeText={setFrom}
          />
          <TextInput
            style={[styles.input, { marginTop: 10, paddingLeft: 25 }]}
            placeholder="To"
            value={to}
            onChangeText={setTo}
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
          <View style={styles.textContainer}>
            <Text style={styles.smallRectangleText}>My Credit</Text>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20, // Add margin to the left and right
  },
  rectangle: {
    height: 347, // Set the height to 347
    width: "100%",
    backgroundColor: "#E2E0E0",
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },

  tltJourney: {
    fontSize: 18,
    marginBottom: 30,
    marginTop: 10,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 60,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
    fontSize: 16,
    fontWeight: "500",
  },
  searchBtn: {
    backgroundColor: "black",
    borderRadius: 30,
    height: 60,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
  },
  textContainer: {
    flex: 3,
    justifyContent: "center",
    marginLeft: 80,
  },
  smallRectangle: {
    height: 163,
    width: "100%",
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  smallRectangleText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  smallRectanglePara: {
    marginTop: 15,
    fontSize: 14,
    color: "#A3A3A3",
  },
});
