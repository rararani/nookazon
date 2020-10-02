import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  FlatList,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";

import { nicknacks } from "../components/Nicknacks";

var count = 0;
var cartPrices = [];
var cartItems = [];

export default function ShoppingScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  function calculateTotal(cartPrices, count) {
    var i;
    var total = 0;
    for (i = 0; i < count; i++) {
      total = total + cartPrices[i];
    }
    return total;
  }

  return (
    <View style={styles.container}>
      <Button
        title="checkout"
        onPress={() => (
          console.log(cartPrices.reduce((a, b) => a + b, 0)),
          navigation.navigate("Checkout", {
            totalCost: cartPrices.reduce((a, b) => a + b, 0),
            checkoutItems: cartItems,
            count: count,
          })
        )}
      />
      <FlatList
        data={nicknacks}
        renderItem={({ item }) => (
          <Card key={item.key} style={styles.card}>
            <Image
              source={require("../assets/tom-nook.jpg")}
              style={styles.image}
            />
            <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
              {item.name}
            </Text>
            <Text style={styles.price} h4>
              {item.cost}
            </Text>
            <Button
              type="clear"
              title="Add to Cart"
              onPress={() => (
                cartItems.push(item.name),
                cartPrices.push(item.cost),
                count++,
                console.log(cartPrices)
              )}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
