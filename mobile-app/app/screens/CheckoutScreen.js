import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";
import { Card, ThemeConsumer } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { nicknacks } from "../components/Nicknacks";
import { color } from "react-native-reanimated";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const URL = "http://10.0.2.2:3000";

  // const [total, setTotal] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(URL, {
  //     price: route.params.checkoutPrices,
  //     length: route.params.checkoutPrices.length,
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setTotal(result);
  //       setLoading(false);
  //     });
  // });

  // fetch(URL, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },

  //   body: JSON.stringify({
  //     prices: route.params.checkoutPrices,
  //     length: route.params.checkoutPrices.length,
  //   }),
  // }).then((response) => {
  //   console.log(response);
  // });

  return (
    console.log(route.params.totalCost),
    (
      <View style={styles.container}>
        <FlatList
        // data={route.params.checkoutItems}
        // renderItem={({ item }) => (
        //   <Card key={item.key} style={styles.card}>
        //     <Image
        //       source={require("../assets/tom-nook.jpg")}
        //       style={styles.image}
        //     />
        //     <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
        //       {item.name}
        //     </Text>
        //     <Text style={styles.price} h4>
        //       {item.cost}
        //     </Text>
        //     <Button type="clear" title="Add to Cart" />
        //   </Card>
        // )}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffcf",
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
