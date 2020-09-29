import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingScreen from "./app/screens/ShoppingScreen";

function ShopScreen() {
  return <ShoppingScreen />;
}

const Stack = createStackNavigator();

function App() {
  console.log("App executed");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shop" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
