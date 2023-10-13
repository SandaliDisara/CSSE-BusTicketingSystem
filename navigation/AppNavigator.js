import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import BusList from "../components/BusList";
import BusInfo from "../components/BusInfo";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List of Busses" component={BusList} />
        <Stack.Screen name="Bus Information" component={BusInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
