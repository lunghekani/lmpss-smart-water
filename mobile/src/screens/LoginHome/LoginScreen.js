import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Logo from "../../../assets/waterLogo.png";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image style={styles.logoImage} source={Logo} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#219ebc",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    marginBottom: 10,
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnText: {
    color: "#fff",
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 40,
    marginTop: 10,
    fontWeight: "bold",
  },
  logoImage: {
    width: 150,
    height: 120,
    marginBottom: 20,
  },
});
