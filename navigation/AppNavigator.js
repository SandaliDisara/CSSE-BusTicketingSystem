import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import BusList from "../components/BusList";
import BusInfo from "../components/BusInfo";
import Credit from "../components/MyCredit";
import TopUpBtn from "../components/TopUsOptions";
import Login from "../components/Login";
import Register from "../components/Register";
import ProfileDetails from "../components/ProfileDetails";
import Profile from "../components/Profile";
import WebHome from "../components/WebHome";
import MyJourneys from "../components/MyJourneys";
import ViewProfile from "../components/ViewProfile";
import LoginWeb from "../components/LoginWeb";

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyCredit" component={Credit} />
        <Stack.Screen
          name="LoginWeb"
          component={LoginWeb}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List of Busses" component={BusList} />
        <Stack.Screen name="Bus Information" component={BusInfo} />
        <Stack.Screen name="TopUpBtn" component={TopUpBtn} />
        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewProfile"
          component={ViewProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WebMyJourney"
          component={MyJourneys}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WebHome"
          component={WebHome}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
