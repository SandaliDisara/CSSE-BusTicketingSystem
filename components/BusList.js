import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import CommonHeader from "./Header";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./config";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function BusList() {
  const route = useRoute();
  const [busData, setBusData] = useState([]);
  const { params } = useRoute();
  const { from, to } = params;
  const navigation = useNavigation();
  const userName = route.params && route.params.userName;

  const handleSearch = () => {
    // Implement your search logic here
    console.log("From:", from);
    console.log("To:", to);
  };

  useEffect(() => {
    // Query the Firestore database
    const q = query(
      collection(db, "busses"),
      where("from", "==", from),
      where("to", "==", to)
    );

    const fetchBusData = async () => {
      try {
        const querySnapshot = await getDocs(q);

        const data = [];
        querySnapshot.forEach((doc) => {
          // Extract the bus number and stations
          const { busNo, stations, price } = doc.data();
          data.push({ busNo, stations, price });
        });

        setBusData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchBusData();
  }, [from, to]);

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
            editable={false}
          />
          <TextInput
            style={[styles.input, { marginTop: 10, paddingLeft: 25 }]}
            placeholder="To"
            value={to}
            editable={false}
          />
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search Journey</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listTitle}>
          <Text style={styles.listTitleText}>Choose Transport</Text>
        </View>
        <ScrollView>
          {busData.map((bus, index) => (
            <View key={index}>
              <View style={styles.smallRectangle}>
                <View style={styles.leftColumn}>
                  <View style={styles.busInfo}>
                    <Image
                      source={require("../assets/bus.png")} // Replace with your bus icon source
                      style={styles.icon}
                    />
                    <Text style={styles.busNumber}>{bus.busNo}</Text>
                  </View>
                  <View style={styles.locationInfo}>
                    <Image
                      source={require("../assets/location.png")} // Replace with your location icon source
                      style={styles.icon}
                    />
                    <Text style={styles.locationText}>{bus.stations}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => {
                    navigation.navigate("Bus Information", {
                      busNo: bus.busNo,
                      from: from,
                      to,
                      price: bus.price,
                      stations: bus.stations,
                    });
                  }}
                >
                  <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.horizontalLine} />{" "}
              {/* Thin horizontal line */}
            </View>
          ))}
        </ScrollView>
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
    marginHorizontal: 20,
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
  listTitle: {
    marginTop: 20,
  },
  listTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  smallRectangle: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  leftColumn: {
    flexDirection: "column",
    flex: 1,
  },
  busInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  busNumber: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  bookButton: {
    backgroundColor: "black",
    width: 100,
    height: 35,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  bookText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  horizontalLine: {
    borderBottomColor: "#989898",
    borderBottomWidth: 1,
    marginTop: 25,
  },
});
