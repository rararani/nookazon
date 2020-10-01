import React, { Component } from "react";
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

import { nicknacks } from "../components/Nicknacks";

var count = 0;
var cartItems = [];

export default class ShoppingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="checkout"
          onPress={() =>
            this.props.navigation.navigate("Checkout", {
              checkoutItems: cartItems,
            })
          }
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
                  cartItems.push({
                    key: item.key,
                    name: item.name,
                    cost: item.cost,
                    image: item.image,
                  }),
                  count++,
                  console.log(cartItems)
                )}
              />
            </Card>
          )}
        />
      </View>
    );
  }
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
