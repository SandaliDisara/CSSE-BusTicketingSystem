import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { db } from "./config"; // Import Firestore and FieldValue
import { doc, updateDoc, collection, addDoc, getDoc } from "firebase/firestore";

export default function TopUpOptions() {
  const [topUpAmount, setTopUpAmount] = useState("");

  

  // Function to fetch the current credit amount from the database
async function fetchCreditAmount() {
  try {
    const creditDocRef = doc(db, "credits", "Q8ZqHR2BlZPnWcMHc4qQ");

    // Fetch the document data
    const creditDocSnapshot = await getDoc(creditDocRef);

    if (creditDocSnapshot.exists()) {
      const creditData = creditDocSnapshot.data();
      const amount = creditData.amount;
      console.log("Amount:", amount);
      return amount;
    } else {
      // Handle the case where the document doesn't exist
      return null;
    }

    

  } catch (error) {
    console.error("Error fetching credit amount:", error);
    return null;
  }
}


  // Function to handle the top-up operation and update credit data
  const handleTopUp = async (amount) => {
    try {
      const currentCreditAmount = await fetchCreditAmount(); // Fetch the current credit amount
  
      if (currentCreditAmount !== null) {
        const newAmount = currentCreditAmount + amount;
        const customDate = "12-12-2023";
  
        const creditDocRef = doc(db, "credits", "Q8ZqHR2BlZPnWcMHc4qQ");
  
        // Update the "amount" field in the credits collection
        await updateDoc(creditDocRef, {
          amount: newAmount, // Update the "amount" field
        });
  
        // Add the top-up record to the "topUpHistory" collection
        const topUpHistoryCollectionRef = collection(creditDocRef, "topUpHistory");
        await addDoc(topUpHistoryCollectionRef, {
          amount: amount,
          date: customDate,
        });
  
        // Log the updated amounts to the console
        console.log("Added Amount:", amount);
        console.log("New Amount:", newAmount);
  
        setTopUpAmount("");
      } else {
        console.log("Error: Could not fetch current credit amount");
      }
    } catch (error) {
      console.error("Error handling top-up:", error);
    }
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <TouchableOpacity onPress={() => handleTopUp(100)}>
          <View style={styles.optionRecs}>
            <Text style={styles.leftText}>100 Credits</Text>
            <Text style={styles.rightText}>Rs. 500</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTopUp(250)}>
          <View style={styles.optionRecs}>
            <Text style={styles.leftText}>250 Credits</Text>
            <Text style={styles.rightText}>Rs. 750</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTopUp(500)}>
          <View style={styles.optionRecs}>
            <Text style={styles.leftText}>500 Credits</Text>
            <Text style={styles.rightText}>Rs. 1200</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <Text style={styles.orText}>OR</Text>
        </View>
        <View style={styles.horizontalLine} />
        <Text style={styles.enterAmountText}>Enter Top Up Amount</Text>
        <TextInput
          style={styles.amountInput}
          placeholder="Enter Amount"
          value={topUpAmount}
          onChangeText={(text) => setTopUpAmount(text)}
        />
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpButtonText} >Top Up Credit</Text>
        </TouchableOpacity>
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
  optionRecs: {
    height: 98,
    width: "100%",
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  leftText: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
  },
  rightText: {
    color: "white",
    fontSize: 20,
  },
  orContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  orText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  enterAmountText: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  amountInput: {
    backgroundColor: "#D7D7D7",
    height: 70,
    width: "100%",
    borderRadius: 10,
    marginTop: 30,
    paddingLeft: 15,
    fontSize: 18,
    color: "#646464",
    fontWeight: "500",
  },
  topUpButton: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  topUpButtonText: {
    color: "white",
    fontSize: 18,
  },
});
