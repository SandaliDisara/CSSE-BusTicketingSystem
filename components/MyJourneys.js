import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./config";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function MyJourneys() {
  const route = useRoute();
  const [busData, setBusData] = useState([]);
  const { params } = useRoute();
  const { user } = params;
  const navigation = useNavigation();
  const journeyImage = require("../assets/journey.png");

  const handleNavigateHome = () => {
    // Navigate to BusList and pass 'from' and 'to' as route parameters
    navigation.navigate("Home");
  };
  useEffect(() => {
    const q = query(collection(db, "journeys"), where("user", "==", user));

    const fetchBusData = async () => {
      try {
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          // Extract the bus number and stations
          const { busNo, date, from, price, to, user } = doc.data();
          data.push({ busNo, date, from, price, to, user });
        });

        setBusData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchBusData();
  }, [user]);

  console.log(busData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>ticketX</Text>
        </View>
        <View style={styles.headerCenter}>
          <Text onPress={handleNavigateHome} style={styles.headerNavLink}>
            Home
          </Text>
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
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {busData.map((bus, index) => (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Journey to {bus.to}</Text>
                <Text style={styles.cardText}>Bus No: {bus.busNo}</Text>
                <Text style={styles.cardText}>From: {bus.from}</Text>
                <Text style={styles.cardText}>To: {bus.to}</Text>
                <Text style={styles.cardText}>Price: {bus.price}</Text>
                <Text style={styles.cardText}>Date: {bus.date}</Text>
              </View>
              <Image source={journeyImage} style={styles.cardBackgroundImage} />
            </View>
          ))}
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
    flexDirection: "row", // Display cards horizontally
    flexWrap: "wrap", // Allow cards to wrap onto the next line
    justifyContent: "space-between", // Add space between cards
    margin: 20,
  },
  card: {
    width: "49.5%", // Set the width of each card
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
    marginBottom: 20, // Adjust margin between cards if needed
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
