import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = async () => {
    if (email === "" && password === "") {
      alert(`Email and password can't be empty`);
    } else if (email === "demo" && password === "0") {
      props.navigation.navigate("HomePage");
      await AsyncStorage.setItem("loggedIn", JSON.stringify(true));
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}
    >
      <View style={{ marginVertical: "20%" }}>
        <View>
          <View style={{ marginHorizontal: "5%", marginVertical: "3%" }}>
            <Text style={{ color: "#000", fontSize: 16 }}>Email</Text>
            <TextInput
              placeholder="email@email.com"
              value={email}
              keyboardType={"email-address"}
              placeholderTextColor={"#8C8989"}
              onChangeText={(value) => setEmail(value)}
              style={{ backgroundColor: "#fff", marginVertical: 5 }}
            />
          </View>
          <View style={{ marginHorizontal: "5%", marginVertical: "3%" }}>
            <Text style={{ color: "#000", fontSize: 16 }}>Password</Text>
            <TextInput
              placeholder="Password"
              value={password}
              keyboardType={"visible-password"}
              placeholderTextColor={"#8C8989"}
              onChangeText={(value) => setPassword(value)}
              style={{ backgroundColor: "#fff", marginVertical: 5 }}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: "5%", marginVertical: 5 }}>
          <TouchableOpacity onPress={() => SignIn()}>
            <View style={{ backgroundColor: "#21D393" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
