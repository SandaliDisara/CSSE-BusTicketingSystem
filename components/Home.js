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
import { db } from "./config";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/HomeStyles";
import { useRoute } from "@react-navigation/native";

export default function Home() {
  const route = useRoute();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [user, setUser] = useState("kulanaka");
  const navigation = useNavigation();
  const userName = route.params && route.params.userName;
  const handleSearch = () => {
    navigation.navigate("List of Busses", { from, to, userName });
  };

  const handleCredit = () => {
    // Navigate to Credit
    navigation.navigate("MyCredit");
  };

  const navigateJourneyDetails = () => {
    // Navigate to BusList and pass 'from' and 'to' as route parameters
    navigation.navigate("WebMyJourney", { user });
  };

  return (
    <View style={styles.container}>
      <CommonHeader userName={userName} />
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
