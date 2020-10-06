import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export default function LoginScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    cartItems: route.params.cartItems,
    secureTextEntry: true,
  });

  const textInputChange = (value) => {
    if (value.length != 0) {
      setUserData({
        ...userData,
        username: value,
        check_textInputChange: true,
      });
    } else {
      setUserData({
        ...userData,
        username: value,
        check_textInputChange: false,
      });
    }
  };

  const pwdInputChange = (value) => {
    if (value.length != 0) {
      setUserData({
        ...userData,
        password: value,
        check_textInputChange: true,
      });
    } else {
      setUserData({
        ...userData,
        password: value,
        check_textInputChange: false,
      });
    }
  };

  const submitData = () => {
    fetch("http://10.0.2.2:3000/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
        cartItems: userData.cartItems,
      }),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Please sign up!</Text>
      </View>
      <View styles={styles.formContainer}>
        <Text style={styles.textForm}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => textInputChange(value)}
          />
          {userData.check_textInputChange ? (
            <Feather name="check-circle" color="green" size={20} />
          ) : null}
        </View>
        <Text style={[styles.textForm, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(value) => pwdInputChange(value)}
          />
          <Feather name="eye-off" color="grey" size={20} />
        </View>
      </View>
      <Button
        title="Finish + Go back to Shopping"
        onPress={() => (submitData(), navigation.navigate("Nookazon"))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    paddingBottom: 50,
  },
  formContainer: {
    paddingBottom: 80,
    marginBottom: 50,
  },
  textForm: {
    color: "#05375a",
    marginLeft: 15,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 15,
  },
});
