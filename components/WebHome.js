import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeOptions() {
  const navigation = useNavigation();

  const navigateToBookJourney = () => {
    // Navigate to the "Book Journey" screen
    navigation.navigate("BookJourney");
  };

  const navigateToMyCredits = () => {
    // Navigate to the "My Credits" screen
    navigation.navigate("MyCredits");
  };

  const navigateToJourneyHistory = () => {
    // Navigate to the "Journey History" screen
    navigation.navigate("WebMyJourney");
  };

  return (
    <>
    <View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>ticketX</Text>
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerNavLink}>
            Home
          </Text>
          <Text style={styles.headerNavLink}>My Journeys</Text>
          <Text style={styles.headerNavLink}>My Credits</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerText}>Kulanaka</Text>
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
    </View>

     <View style={styles.container2}>
      <TouchableOpacity onPress={navigateToBookJourney}>
        <View style={[styles.card, styles.customCard]}>
          <Image
            source={require("../assets/bus.png")} 
            style={[styles.cardImage, styles.customCardImage]}
          />
          <Text style={[styles.cardText, styles.customCardText]}>Book Journey</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToMyCredits}>
        <View style={[styles.card, styles.customCard]}>
          <Image
            source={require("../assets/coins.png")} 
            style={[styles.cardImage, styles.customCardImage]}
          />
          <Text style={[styles.cardText, styles.customCardText]}>My Credits</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToJourneyHistory}>
        <View style={[styles.card, styles.customCard]}>
          <Image
            source={require("../assets/location.png")} 
            style={[styles.cardImage, styles.customCardImage]}
          />
          <Text style={[styles.cardText, styles.customCardText]}>Journey History</Text>
        </View>
      </TouchableOpacity>
      </View>
      </>
  );
}


  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
   
    },
    container2: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      margin: 20,
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

    // styles for cards

    customCard: {
      backgroundColor: "black",
      width: 220,
      height: 250,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      // Add your custom styles here
      margin: 10,
      shadowColor: "rgba(0, 0, 0, 0.4)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    customCardImage: {
      width: 80,
      height: 80,
      marginBottom: 10,
      // Add your custom image styles here
    },
    customCardText: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      // Add your custom text styles here
    }
  });


// container: {
//   flexDirection: "row",
//   justifyContent: "space-around",
//   marginTop: 20,
// },
// card: {
//   backgroundColor: "#E2E0E0",
//   width: 120,
//   height: 150,
//   alignItems: "center",
//   justifyContent: "center",
//   borderRadius: 10,
// },
// cardImage: {
//   width: 60,
//   height: 60,
//   marginBottom: 10,
// },
// cardText: {
//   fontSize: 16,
//   fontWeight: "bold",
//   textAlign: "center",
// },