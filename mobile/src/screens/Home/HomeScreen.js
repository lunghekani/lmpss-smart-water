import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Divider from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.theSpot}>
        <Text style={styles.headingText}>My Home</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.parentChild}>
            <TouchableOpacity style={styles.circleOpacity}>
              <Ionicons color={"#219ebc"} name="water-outline" size={30} />
            </TouchableOpacity>
            <Text style={styles.btnText}>Water</Text>
          </View>
          <View style={styles.parentChild}>
            <TouchableOpacity style={styles.circleElec}>
              <Ionicons color={"#FFEF00"} name="flash-outline" size={30} />
            </TouchableOpacity>
            <Text style={styles.btnText}>Electricity</Text>
          </View>
          <View style={styles.parentChild}>
            <TouchableOpacity style={styles.circleCharts}>
              <Ionicons color={"red"} name="trending-up-outline" size={30} />
            </TouchableOpacity>
            <Text style={styles.btnText}>Charts</Text>
          </View>
          <View style={styles.parentChild}>
            <TouchableOpacity style={styles.circleSettings}>
              <Ionicons color={"grey"} name="settings-outline" size={30} />
            </TouchableOpacity>
            <Text style={styles.btnText}>Settings</Text>
          </View>
        </View>
      </View>

      <View style={styles.theLoft}>
        <Text style={styles.headingText}>Other Features</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loftButtons}>
            <Text>
              Usage{" "}
              <Ionicons
                color={"grey"}
                name="analytics-outline"
                size={30}
              ></Ionicons>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loftButtons}>
            <Text>
              Metering{" "}
              <Ionicons
                color={"grey"}
                name="speedometer-outline"
                size={30}
              ></Ionicons>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loftButtons}>
            <Text>
              More Options{" "}
              <Ionicons
                color={"grey"}
                name="options-outline"
                size={30}
              ></Ionicons>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  headingText: {
    fontSize: 20,
  },
  theSpot: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  theLoft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "95%",
    flexWrap: "wrap",
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    flexWrap: "wrap",
    padding: 10,
  },
  loftButtons: {
    borderRadius: 15,
    width: 180,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3A919",
    marginTop: 10,
    fontSize: 14,
  },
  circleOpacity: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  circleElec: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  circleSettings: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  circleCharts: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  parentChild: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "50%",
  },
});
