import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function ShoppingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcf",
  },
});

export default ShoppingScreen;
