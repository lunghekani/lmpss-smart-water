import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";

import Divider from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Block, Text } from "../../Components/Index";
import * as theme from "../../theme";
import mocks from "../../settings";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigation, settings } = this.props;

    const WaterIcon = settings["water"].icon;
    const LightIcon = settings["light"].icon;
    const ACIcon = settings["ac"].icon;
    const TempIcon = settings["temperature"].icon;
    const FanIcon = settings["fan"].icon;
    const WiFiIcon = settings["wi-fi"].icon;
    const ElectricityIcon = settings["electricity"].icon;

    return (
      <SafeAreaView style={styles.mainContainer}>
        <Block column>
          <Text welcome>Hello</Text>
          <Text name>John Doe</Text>
        </Block>
        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.5} row style={{ alignItems: "flex-end" }}>
            <Text h1>34</Text>
            <Text h1 size={34} height={80} weight="600" spacing={0.1}>
              kL
            </Text>
          </Block>
          <Block flex={1} column>
            <Text caption>Usage</Text>
          </Block>
        </Block>
        <Block column space="between">
          <Block
            row
            space="around"
            style={{ marginVertical: theme.sizes.base }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Settings", { name: "water" })}
            >
              <Block center middle style={styles.button}>
                <WaterIcon size={38} />
                <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                  {settings["water"].name}
                </Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Settings", { name: "ac" })}
            >
              <Block center middle style={styles.button}>
                <ACIcon size={38} />
                <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                  {settings["ac"].name}
                </Text>
              </Block>
            </TouchableOpacity>
          </Block>

          <Block
            row
            space="around"
            style={{ marginVertical: theme.sizes.base }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("Settings", { name: "temperature" })
              }
            >
              <Block center middle style={styles.button}>
                <TempIcon size={38} />
                <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                  {settings["temperature"].name}
                </Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Settings", { name: "fan" })}
            >
              <Block center middle style={styles.button}>
                <FanIcon size={38} />
                <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                  {settings["fan"].name}
                </Text>
              </Block>
            </TouchableOpacity>
          </Block>

          <Block
            row
            space="around"
            style={{ marginVertical: theme.sizes.base }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Settings", { name: "wi-fi" })}
            >
              <Block center middle style={styles.button}>
                <WiFiIcon size={38} />
                <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                  {settings["wi-fi"].name}
                </Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("Settings", { name: "electricity" })
              }
            >
              <Block center middle style={styles.button}>
                <ElectricityIcon size={38} />
                <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                  {settings["electricity"].name}
                </Text>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </SafeAreaView>
    );
  }
}
HomeScreen.defaultProps = {
  settings: mocks,
};

export default HomeScreen;
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
  button: {
    backgroundColor: theme.colors.button,
    width: 151,
    height: 151,
    borderRadius: 151 / 2,
  },
});
