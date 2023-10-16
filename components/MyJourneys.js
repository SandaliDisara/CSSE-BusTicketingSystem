import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MyJourneys() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>ticketX</Text>
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerNavLink}>Home</Text>
          <Text style={styles.headerNavLink}>My Journeys</Text>
          <Text style={styles.headerNavLink}>My Credits</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerText}>Hi Kulanaka</Text>
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
          <Text style={styles.cardTitle}>Journey Details</Text>
          <Text style={styles.cardText}>Date: October 15, 2023</Text>
          <Text style={styles.cardText}>Route: Example Route</Text>
          {/* Add more details as needed */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View details</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 16 }} />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Journey Details</Text>
          <Text style={styles.cardText}>Date: October 15, 2023</Text>
          <Text style={styles.cardText}>Route: Example Route</Text>
          {/* Add more details as needed */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Journey Details</Text>
          <Text style={styles.cardText}>Date: October 15, 2023</Text>
          <Text style={styles.cardText}>Route: Example Route</Text>
          {/* Add more details as needed */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View details</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 16 }} />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Journey Details</Text>
          <Text style={styles.cardText}>Date: October 15, 2023</Text>
          <Text style={styles.cardText}>Route: Example Route</Text>
          {/* Add more details as needed */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View details</Text>
          </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center", 
  },
  card: {
    flex: 1,
    backgroundColor: "white",
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
