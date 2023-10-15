import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import BusList from "../components/BusList";
import BusInfo from "../components/BusInfo";
import Credit from "../components/MyCredit";
import TopUpBtn from "../components/TopUsOptions";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List of Busses" component={BusList} />
        <Stack.Screen name="Bus Information" component={BusInfo} />
        <Stack.Screen name="MyCredit" component={Credit} />
        <Stack.Screen name="TopUpBtn" component={TopUpBtn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
