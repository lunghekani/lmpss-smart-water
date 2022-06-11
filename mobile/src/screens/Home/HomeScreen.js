import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Divider from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Block, Text } from "../../Components/Index";
import * as theme from "../../theme";
import mocks from "../../settings";

export default function HomeScreen({ navigation }) {
 
  const movieURL = "https://localhost:5001/api/genres";
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

 useEffect(() => {
  fetch(movieURL)
    .then((response) => response.json()) // get response, convert to json
    .then((json) => {
      setData(json.id);
      setTitle(json.name);

    })
    .catch((error) => alert(error)) // display errors
    .finally(() => setLoading(false)); // change loading state
}, []);

async function getMoviesAsync() {
  try {
    let response = await fetch(movieURL);
    let json = await response.json();
    setData(json.id);
    setTitle(json.name);

    setLoading(false);
  } catch (error) {
    alert(error);
  }
}

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
        <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Block center middle style={styles.button}>
              <TouchableOpacity style={styles.circleOpacity}>
                <Ionicons color={"#219ebc"} name="water-outline" size={30} />
              </TouchableOpacity>
              <Text style={styles.btnText}>Water</Text>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Settings", { name: "light" })}
          >
            <Block center middle style={styles.button}>
              <TouchableOpacity style={styles.circleOpacity}>
                <Ionicons color={"#219ebc"} name="water-outline" size={30} />
              </TouchableOpacity>
              <Text style={styles.btnText}>Water</Text>
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
      <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text>
                  {item.id}. {item.title}, {item.releaseYear}
                </Text>
              </View>
            )}
          />
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
  button: {
    backgroundColor: theme.colors.button,
    width: 151,
    height: 151,
    borderRadius: 151 / 2,
  },
});
