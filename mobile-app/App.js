import React, { Component } from "react";
import { Text, Button, StyleSheet, SafeAreaView } from "react-native";
import {
  NavigationContainer,
  useLinkProps,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingScreen from "./app/screens/ShoppingScreen";
import CheckoutScreen from "./app/screens/CheckoutScreen";

// function ShopScreen() {
//   return (
//     <SafeAreaView style={styles.row}>
//       <SafeAreaView style={styles.col}>
//         <Text>Product here</Text>
//       </SafeAreaView>
//     </SafeAreaView>
//   );
//   const navigation = useNavigation();
//   return <ShoppingScreen />;
// }

// function Checkout({ navigation }) {
//   // return <SafeAreaView style={styles.checkoutColor} />;
//   return <CheckoutScreen />;
// }

const Stack = createStackNavigator();

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
            name="Nook's Cranny"
            children={this.createShoppingStack}
          />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  checkoutColor: {
    flex: 1,
    backgroundColor: "#ffcf",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  col: {
    flex: 1,
  },
});
