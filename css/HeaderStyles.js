import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: -38,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "500",
  },
  menuButton: {
    padding: 10,
    borderRadius: 30,
  },
  menuIconCircle: {
    backgroundColor: "black",
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
  },
  menu: {
    backgroundColor: "black",
    width: "75%",
    height: "100%",
    paddingTop: 20,
    paddingRight: 20,
    position: "absolute",
    right: 0,
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
    marginLeft: 40,
  },
  menuItem: {
    color: "white",
    fontSize: 18,
    marginLeft: 30,
  },
  separator: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
})