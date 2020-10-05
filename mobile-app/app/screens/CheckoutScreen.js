import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Button,
  ActivityIndicator,
  SafeAreaView,
  SectionList,
} from "react-native";
import { Card, ThemeConsumer } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { nicknacks } from "../components/Nicknacks";
import { ScrollView } from "react-native-gesture-handler";

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const URL = "http://10.0.2.2:3000";
  const [cartItems, setCartItems] = useState(route.params.checkoutItems);
  const [checkoutCosts, setCheckoutCosts] = useState(
    route.params.checkoutCosts
  );

  function calculateTotal(costs) {
    return costs.reduce((a, b) => a + b, 0);
  }

  const Item = ({ name, cost }) => (
    <View style={styles.receiptFormat}>
      <View style={styles.textContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.innerText}>{cost} bell(s)</Text>
        </View>
      </View>
    </View>
  );

  const Total = ({ name, cost }) => (
    <View style={styles.receiptFormat}>
      <View style={styles.textContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.innerText}>{cost} bell(s)</Text>
        </View>
      </View>
    </View>
  );

  var total = calculateTotal(checkoutCosts);
  const renderItem = ({ item }) => <Item name={item.name} cost={item.cost} />;

  return (
    console.log(calculateTotal(checkoutCosts)),
    (
      <SafeAreaView style={styles.container}>
        <View style={styles.miniContainer}>
          <Text style={styles.title}>Checkout</Text>
        </View>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.name + index}
        />
        <ScrollView>
          <Total name="Total" cost={total} />
          <Button
            title="PROCEED"
            onPress={() =>
              navigation.navigate("Login", { cartItems: cartItems })
            }
          />
        </ScrollView>
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#00b849",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  innerText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "right",
    marginRight: 15,
  },
  line: {
    borderBottomColor: "#fff",
    borderBottomWidth: 4,
    borderBottomColor: "#fff",
    marginBottom: 15,
  },
  miniContainer: {
    borderBottomWidth: 4,
    borderBottomColor: "#fff",
    marginBottom: 20,
  },
  receiptFormat: {
    flexDirection: "column",
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  textContainer: {
    marginLeft: 15,
    lineHeight: 5,
    flex: 1,
    flexDirection: "row",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 70,
    marginLeft: 10,
  },
});

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
//     costs: checkoutCosts,
//   }),
// }).then((response) => {
//   setTotal(response);
// });
