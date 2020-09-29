import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ShoppingScreen from "./app/screens/ShoppingScreen";

export default function App() {
  console.log("App executed.");
  return <ShoppingScreen />;
  // return (
  //   <View style={styles.container}>
  //     <Text>Hello World!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
