import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ShoppingScreen from "./app/screens/ShoppingScreen";
import CheckoutScreen from "./app/screens/CheckoutScreen";

export default function App() {
  console.log("App executed.");
  return <CheckoutScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
