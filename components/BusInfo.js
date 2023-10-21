import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function BusInfo() {
  const { params } = useRoute();
  const { busNo, from, to, price, stations } = params;

  const [journeyBooked, setJourneyBooked] = useState(false);

  const renderQRCodeContent = () => {
    if (journeyBooked) {
      // Display the QR code image
      return (
        <Image
          source={require("../assets/qrcode.png")} 
          style={styles.qrCodeImage}
        />
      );
    } else {
      // Display the text and "Book Journey" button
      return (
        <>
          <Text style={styles.qrCodeText}>
            Book Journey to {"\n"}generate QR code
          </Text>
        </>
      );
    }
  };

  const downloadQRCode = () => {
    // Simulate booking journey and set journeyBooked to true
    setJourneyBooked(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <View style={styles.infoRow}>
            <Text style={styles.fieldName}>Bus Number:</Text>
            <Text style={styles.fieldValue}>{busNo}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.fieldName}>From:</Text>
            <Text style={styles.fieldValue}>{from}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.fieldName}>To:</Text>
            <Text style={styles.fieldValue}>{to}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.fieldName}>Price:</Text>
            <Text style={styles.fieldValue}>{price}</Text>
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={downloadQRCode}>
            <Text style={styles.bookText}>
              {journeyBooked ? "Download QR Code" : "Book Journey"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stationsContainer}>
          <Text style={styles.stationsHeading}>Stopping Stations - </Text>
          <Text style={styles.stationsList}>{stations}</Text>
        </View>
        <View style={styles.qrCodeContainer}>
          <View style={styles.qrCodeRectangle}>{renderQRCodeContent()}</View>
        </View>
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
    height: 265,
    width: "100%",
    backgroundColor: "#E2E0E0",
    padding: 20,
    borderRadius: 10,
    marginTop: -5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  fieldName: {
    fontSize: 18,
    fontWeight: "500",
  },
  fieldValue: {
    fontSize: 18,
  },
  bookButton: {
    backgroundColor: "black",
    borderRadius: 30,
    height: 60,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  bookText: {
    color: "white",
    fontSize: 18,
  },
  stationsContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  stationsHeading: {
    alignItems: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  stationsList: {
    alignItems: "center",
    fontSize: 18,
  },
  qrCodeContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  qrCodeRectangle: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qrCodeText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    color: "#979696",
  },
  qrCodeImage: {
    width: 250, 
    height: 250,
  },
  downloadButton: {
    backgroundColor: "black",
    borderRadius: 30,
    height: 60,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 18,
  },
});
