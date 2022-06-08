import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import Chart from "../../../assets/charts.png";

export default function ChartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.header}>Progress Charts</Text>
      <Image source={Chart} style={styles.chartImage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  chartImage: {
    width: 400,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
