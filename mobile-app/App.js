import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function ShopScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
}

function Checkout() {
  return <View style={styles.checkoutColor} />;
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
