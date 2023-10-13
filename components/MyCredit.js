import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler"; // Import ScrollView
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "./config";

export default function MyCredit() {

    const dummyBusData = [
        { number: "Bus 101", location: "B1, B2, T6, UB" },
        { number: "Bus 102", location: "B4, N7, UB, B1" },
        { number: "Bus 103", location: "B4, B8, T1" },
        { number: "Bus 104", location: "B2, T5, B1, B3" },
      ];

    
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

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
            <Text style={styles.largeRectangleText}> 450</Text>
            <Text style={styles.mediumRectangleText}>Remaining Credits</Text>
            <Text style={styles.smallRectangleText}> Last top up date - 10/10/2023</Text>
          </View> 
        </View>
        <TouchableOpacity style={styles.topUpButton}>
            <Text style={styles.topUpText}>Top Up Credits</Text>
          </TouchableOpacity>
          <View style={styles.listTitle}>
          <Text style={styles.listTitleText}>Credit History</Text>
        </View>
          <ScrollView>
          {dummyBusData.map((bus, index) => (
            <View key={index}>
              <View style={styles.smallRectangle2}>
                <View style={styles.leftColumn}>
                  <View style={styles.busInfo}>
                    <Image
                      source={require("../assets/bus.png")} // Replace with your bus icon source
                      style={styles.icon}
                    />
                    <Text style={styles.busNumber}>{bus.number}</Text>
                  </View>
                  <View style={styles.locationInfo}>
                    <Image
                      source={require("../assets/location.png")} // Replace with your location icon source
                      style={styles.icon}
                    />
                    <Text style={styles.locationText}>{bus.location}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.bookButton}>
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
        padding: 20,
        backgroundColor: "black", // Adjust as needed
        borderWidth: 1,
        borderColor: "#E2E0E0",

      },
      creditHeader: {
        flexDirection: "row",
        alignItems: "center",
      },
      creditText: {
        fontSize: 18,
        color: "white", // Adjust the color as needed
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
            height: 80,
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
          marginLeft: 40, // Adjusted margin
        },
        textContainer: {
          flex: 3,
          justifyContent: "center",
          marginLeft: 20, // Adjusted margin
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
            marginTop: 15,
          },
      })
      
      
      

