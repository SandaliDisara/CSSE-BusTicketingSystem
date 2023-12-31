import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { db } from "./config";
import { useNavigation } from "@react-navigation/native";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";


export default function MyCredit() {
  const navigation = useNavigation();
  const [creditAmount, setCreditAmount] = useState(null);
  const [lastTopUpDate, setLastTopUpDate] = useState(null);
  const [creditHistory, setCreditHistory] = useState([]);


  const handleTopUpBtn = () => {
    // Navigate to TopUpBtn
    navigation.navigate("TopUpBtn");
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the main credit data
        const creditDocRef = doc(db, "credits", "Q8ZqHR2BlZPnWcMHc4qQ");
        const creditDocSnapshot = await getDoc(creditDocRef);

        if (creditDocSnapshot.exists) {
          const data = creditDocSnapshot.data();
          setCreditAmount(data.amount);
          setLastTopUpDate(data.date);

          fetchCreditHistory();
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

 
    // Fetch credit history data from Firestore
    const fetchCreditHistory = async () => {
      try {
        const creditDocRef = doc(db, "credits", "Q8ZqHR2BlZPnWcMHc4qQ"); // Replace with your Firestore document ID
        const historyCollectionRef = collection(creditDocRef, "topUpHistory");
        const historyQuerySnapshot = await getDocs(historyCollectionRef);
  
        const historyData = [];
        historyQuerySnapshot.forEach((doc) => {
          historyData.push(doc.data());
        });
  
        // Log the history data to the console for debugging
        console.log("Credit History Data:", historyData);
  
        setCreditHistory(historyData);
      } catch (error) {
        console.error("Error fetching credit history from Firestore: ", error);
      }
    };
  
    useEffect(() => {
      fetchCreditHistory();
    }
  , []);
  
  
  

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.smallRectangle}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/coins.png")}
              style={{ width: 90, height: 90 }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.largeRectangleText}>{creditAmount}</Text>
            <Text style={styles.mediumRectangleText}>Remaining Credits</Text>
            <Text style={styles.smallRectangleText}>
              Last top-up date - 12/10/2023
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.topUpButton} onPress={handleTopUpBtn}>
          <Text style={styles.topUpText}>Top Up Credits</Text>
        </TouchableOpacity>
        <View style={styles.listTitle}>
          <Text style={styles.listTitleText}>Credit History</Text>
        </View>
        <ScrollView>
          {creditHistory.map((credit, index) => (
            <View key={index}>
              <View style={styles.smallRectangle2}>
                <View style={styles.leftColumn}>
                  <View style={styles.busInfo}>
                    <Text style={styles.busNumber}>      {credit.amount} Credits                       </Text>  
                    <Text style={styles.locationText}>{credit.date}</Text>
                  </View>
                  
                </View>
              </View>
              <View style={styles.horizontalLine} />
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
    padding: 20,
    backgroundColor: "black", 
    borderWidth: 1,
    borderColor: "#E2E0E0",
  },
  creditHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  creditText: {
    fontSize: 18,
    color: "white", 
  },
  creditValue: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
  },
  lastEditedDate: {
    fontSize: 14,
    color: "lightgray",
  },
  topUpButton: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  topUpText: {
    color: "white",
    fontSize: 18,
  },
  creditHistory: {
    marginTop: 50,
  },
  historyEntry: {
    fontSize: 16,
  },

  smallRectangle: {
    height: 140,
    width: "100%",
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  smallRectangle2: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  listTitle: {
    marginTop: 20,
  },
  listTitleText: {
    fontSize: 20,
    fontWeight: "bold",
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
    marginLeft: 20, 
  },
  largeRectangleText: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  mediumRectangleText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  smallRectangleText: {
    fontSize: 14,
    color: "lightgray",
    textAlign: "center",
  },

  leftColumn: {
    flexDirection: "column",
    flex: 1,
  },
  busInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
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
    marginTop: 15,
  },
});
