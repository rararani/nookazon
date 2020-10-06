import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import ShoppingScreen from "./app/screens/ShoppingScreen";
import CheckoutScreen from "./app/screens/CheckoutScreen";
import LoginScreen from "./app/screens/LoginScreen";

const Stack = createStackNavigator();

export default class App extends Component {
  createShoppingStack = (props) => (
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
            }}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{
              title: "Your Shopping Bag",
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Register/Login" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
