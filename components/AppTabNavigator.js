import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import BookDonateScreen from "../screens/DonateScreen";
import BookRequestScreen from "../screens/RequstersScreen";

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks: {
    screen: BookDonateScreen,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/q.png")} />,
      tabBarLabel: "Donate Books",
    },
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/request-list.png")} />,
      tabBarLabel: " Book Request",
    },
  },
});
