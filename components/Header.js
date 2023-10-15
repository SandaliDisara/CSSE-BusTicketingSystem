import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CommonHeader({ userName }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Hello,{"\n"}
        {userName}
      </Text>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <View style={styles.menuIconCircle}>
          <FontAwesome name="bars" size={23} color="white" />
        </View>
      </TouchableOpacity>

      <MenuSlider visible={menuVisible} closeMenu={closeMenu} />
    </View>
  );
}

function MenuSlider({ visible, closeMenu }) {
  if (!visible) return null;

  return (
    <Modal transparent={true} visible={visible}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={closeMenu}
      >
        <View style={styles.menu}>
          <TouchableOpacity onPress={closeMenu}>
            <View style={styles.menuItemContainer}>
              <FontAwesome name="user" size={35} color="white" />
              <Text style={styles.menuItem}>Profile</Text>
            </View>
            <View style={styles.separator}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeMenu}>
            <View style={styles.menuItemContainer}>
              <FontAwesome name="road" size={35} color="white" />
              <Text style={styles.menuItem}>My Journeys</Text>
            </View>
            <View style={styles.separator}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeMenu}>
            <View style={styles.menuItemContainer}>
              <FontAwesome name="credit-card" size={35} color="white" />
              <Text style={styles.menuItem}>My Credits</Text>
            </View>
            <View style={styles.separator}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeMenu}>
            <View style={styles.menuItemContainer}>
              <FontAwesome name="cog" size={35} color="white" />
              <Text style={styles.menuItem}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
});
