import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.goBack}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            color={"#219ebc"}
            size={24}
            name="chevron-back-circle-outline"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.loginText}>Sign up</Text>
      <TextInput style={styles.input} placeholder={"Full Name"} />
      <TextInput style={styles.input} placeholder={"Email"} />
      <View>
        <TextInput style={styles.input} placeholder={"Password"} />
        {/* <Ionicons name='eye-off' size={24} color='red'/> */}
      </View>
      {/* <Text style={styles.passwordText}>Forgot Password?</Text> */}
      <TouchableOpacity
        style={styles.loginButton}
        // onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 25,
  },
  loginButton: {
    backgroundColor: "#219ebc",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    marginBottom: 10,
    marginTop: 30,
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
  input: {
    borderColor: "#fff",
    borderBottomColor: "#eeeeee",
    borderWidth: 1,
    width: 350,
    height: 40,
    marginBottom: 10,
  },
  loginText: {
    alignSelf: "flex-start",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  passwordText: {
    alignSelf: "flex-end",
    fontSize: 12,
    right: 30,
    color: "#219ebc",
    fontWeight: "400",
  },
  goBack: {
    flexDirection: "column",
    alignSelf: "baseline",
    bottom: 220,
  },
});
