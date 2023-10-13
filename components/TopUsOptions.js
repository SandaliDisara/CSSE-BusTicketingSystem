import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TopUpOptions() {
  const [topUpAmount, setTopUpAmount] = useState("");

  const handleTopUp = () => {
    // Handle top-up logic here
    console.log("Top-up amount:", topUpAmount);
    // You can add further logic here, such as making an API request.
  };

  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.optionRecs}>
          <Text style={styles.leftText}>100 Credits</Text>
          <Text style={styles.rightText}>Rs. 500</Text>
        </View>
        <View style={styles.optionRecs}>
          <Text style={styles.leftText}>250 Credits</Text>
          <Text style={styles.rightText}>Rs. 750</Text>
        </View>
        <View style={styles.optionRecs}>
          <Text style={styles.leftText}>500 Credits</Text>
          <Text style={styles.rightText}>Rs. 1200</Text>
        </View>
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
        <TouchableOpacity style={styles.topUpButton} onPress={handleTopUp}>
          <Text style={styles.topUpButtonText}>Top Up Credit</Text>
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
