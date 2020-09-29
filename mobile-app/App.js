import * as React from "react";
import { Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingScreen from "./app/screens/ShoppingScreen";

function ShopScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate("Checkout")}
      />
    </SafeAreaView>
  );
}

function Checkout() {
  return <SafeAreaView style={styles.checkoutColor} />;
}

const Stack = createStackNavigator();

function App() {
  console.log("App executed");
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Nook's Cranny"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Nook's Cranny" component={ShopScreen} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  checkoutColor: {
    flex: 1,
    backgroundColor: "#ffcf",
  },
});

export default App;
