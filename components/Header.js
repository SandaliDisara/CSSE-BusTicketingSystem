import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/HeaderStyles";

export default function CommonHeader({ userName, userId }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
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
      <MenuSlider
        visible={menuVisible}
        closeMenu={closeMenu}
        navigation={navigation}
      />
    </View>
  );
}

function MenuSlider({ visible, closeMenu, navigation }) {
  if (!visible) return null;
  return (
    <Modal transparent={true} visible={visible}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={closeMenu}
      >
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileDetails")}
          >
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
          <TouchableOpacity onPress={() => navigation.navigate("MyCredit")}>
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
