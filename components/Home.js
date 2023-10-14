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
import {styles} from "./HomeStyles";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("List of Busses", { from, to });
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
      </View>
    </View>
  );
}

