import React, { Component } from "react";
import { Text, Button, StyleSheet, SafeAreaView } from "react-native";
import {
  NavigationContainer,
  useLinkProps,
  useNavigation,
} from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import ShoppingScreen from "./app/screens/ShoppingScreen";
import CheckoutScreen from "./app/screens/CheckoutScreen";

const Stack = createStackNavigator();
const myButton = (
  <FontAwesome.Button
    name="shopping-cart"
    backgroundColor="#000"
    onPress={() => alert("button!")}
  >
    Go to Checkout
  </FontAwesome.Button>
);

function newButton(navigation) {
  return (
    <FontAwesome.Button
      name="shopping-cart"
      backgroundColor="#000"
      onPress={() => navigation.navigate("Checkout")}
    >
      Go to Checkout
    </FontAwesome.Button>
  );
}

export default class App extends Component {
  createShoppingStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={ShoppingScreen} />
    </Stack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Nookazon"
            children={this.createShoppingStack}
            options={{
              title: "Nookazon",
              headerRight: () => myButton,
            }}
          />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
