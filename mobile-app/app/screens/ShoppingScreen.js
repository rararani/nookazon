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

export default class ShoppingScreen extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Products products={nicknacks} />
      // </View>
      <View style={styles.container}>
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
              <Button type="clear" title="Add to Cart" />
            </Card>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {},
  col: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
