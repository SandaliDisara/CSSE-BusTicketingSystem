import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation, useRoute } from '@react-navigation/native';

export default function MyJourneys() {
  const navigation = useNavigation();
  const {params} = useRoute();
  const  user  = params
  const journeyImage = require("../assets/journey.png");

  const handleNavigateHome = () => {
    // Navigate to BusList and pass 'from' and 'to' as route parameters
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>ticketX</Text>
        </View>
        <View style={styles.headerCenter}>
          <Text onPress={handleNavigateHome} style={styles.headerNavLink}>Home</Text>
          <Text style={styles.headerNavLink}>My Journeys</Text>
          <Text style={styles.headerNavLink}>My Credits</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerText}>{user}</Text>
        </View>
      </View>
      <View style={styles.heroSection}>
        <Image
          source={require("../assets/myJourney.png")}
          style={styles.heroImage}
        />
        <View style={styles.overlay} /> {/* Add overlay View */}
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>My Journeys</Text>
          <Text style={styles.heroSubtitle}>View all your journey history</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Journey to Kandy</Text>
            <Text style={styles.cardText}>Bus No: BU-6784</Text>
            <Text style={styles.cardText}>From: Kaluthara</Text>
            <Text style={styles.cardText}>To: Colombo</Text>
            <Text style={styles.cardText}>Price: 100.00</Text>
            <Text style={styles.cardText}>Date: 10th Aug 2023</Text>
          </View>
          <Image source={journeyImage} style={styles.cardBackgroundImage} />
        </View>
        <View style={{ width: 16 }} />
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Journey to Kandy</Text>
            <Text style={styles.cardText}>Bus No: BU-6784</Text>
            <Text style={styles.cardText}>From: Kaluthara</Text>
            <Text style={styles.cardText}>To: Colombo</Text>
            <Text style={styles.cardText}>Price: 100.00</Text>
            <Text style={styles.cardText}>Date: 10th Aug 2023</Text>
          </View>
          <Image source={journeyImage} style={styles.cardBackgroundImage} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Journey to Kandy</Text>
            <Text style={styles.cardText}>Bus No: BU-6784</Text>
            <Text style={styles.cardText}>From: Kaluthara</Text>
            <Text style={styles.cardText}>To: Colombo</Text>
            <Text style={styles.cardText}>Price: 100.00</Text>
            <Text style={styles.cardText}>Date: 10th Aug 2023</Text>
          </View>
          <Image source={journeyImage} style={styles.cardBackgroundImage} />
        </View>
        <View style={{ width: 16 }} />
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Journey to Kandy</Text>
            <Text style={styles.cardText}>Bus No: BU-6784</Text>
            <Text style={styles.cardText}>From: Kaluthara</Text>
            <Text style={styles.cardText}>To: Colombo</Text>
            <Text style={styles.cardText}>Price: 100.00</Text>
            <Text style={styles.cardText}>Date: 10th Aug 2023</Text>
          </View>
          <Image source={journeyImage} style={styles.cardBackgroundImage} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  headerCenter: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  headerNavLink: {
    color: "white",
    fontSize: 14,
    marginLeft: 10,
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  heroSection: {
    height: 400,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  heroContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  heroSubtitle: {
    color: "white",
    fontSize: 16,
  },
  cardContainer: {
    flex: "justifyContent",
    flexDirection: "row",
    alignItems: "center",

    margin: 20,
  },
  card: {
    flex: 1,
    width: "auto",
    alignItems: "center",
    backgroundColor: "white", // Make the background transparent
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden", // Clip the content inside the card
    position: "relative", // Position the image absolutely inside the card
  },
  cardBackgroundImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 220, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Apply border radius to match the card's border radius
    width: "100%", // Ensure the content covers the entire card width
  },
  cardImage: {
    width: 200, // Adjust the width and height according to your design
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
