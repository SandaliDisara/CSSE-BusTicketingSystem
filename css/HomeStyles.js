import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20, // Add margin to the left and right
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
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
  },
  textContainer: {
    flex: 3,
    justifyContent: "center",
    marginLeft: 80,
  },
  smallRectangle: {
    height: 163,
    width: "100%",
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  smallRectangleText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  smallRectanglePara: {
    marginTop: 15,
    fontSize: 14,
    color: "#A3A3A3",
  },
});
