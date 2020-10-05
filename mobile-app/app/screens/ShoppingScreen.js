import React, { useState } from "react";
import {
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

const tom = "https://i.ibb.co/5R7mXLP/tom-nook.jpg";
const froggy = "https://i.ibb.co/cyMVpQT/froggy-chair.jpg";
const moon = "https://i.ibb.co/5FRvLzV/moon-chair.jpg";
const slider = "https://i.ibb.co/RBxnJ22/kk-slider.jpg";

export default function ShoppingScreen() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [costs, setCosts] = useState([]);

  function removeItem(item) {
    var filtered = cartItems.filter((thing) => thing.name != item.name);
    setCartItems(filtered);
  }

  function removeCost(item) {
    var array = [...costs];
    var index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
      setCosts(array);
    }
  }

  function getImage(item) {
    if (item.name === "Tom Nook") {
      return tom;
    } else if (item.name === "Froggy Chair") {
      return froggy;
    } else if (item.name === "Crescent Moon Chair") {
      return moon;
    } else {
      return slider;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="checkout"
        onPress={() =>
          navigation.navigate("Checkout", {
            checkoutItems: cartItems,
            checkoutCosts: costs,
          })
        }
      />
      <FlatList
        data={nicknacks}
        renderItem={({ item }) => (
          <Card key={item.key} style={styles.card}>
            <Image source={{ uri: getImage(item) }} style={styles.image} />
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
                setCosts(costs.concat(item.cost)),
                setCartItems(
                  cartItems.concat({
                    name: item.name,
                    cost: item.cost,
                  })
                )
              )}
            />
            <Button
              type="clear"
              title="Remove from Cart"
              color="#eb67b4"
              onPress={() => (removeCost(item.cost), removeItem(item))}
            />
          </Card>
        )}
        keyExtractor={(item, index) => item.name + index}
      />
    </SafeAreaView>
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
