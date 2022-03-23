import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import Crud2 from "./Crud2";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Crud2")}
        >
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Button: {
    width: 150,
    height: 55,
    marginTop: 20,
    marginRight: 10,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 20,
  },
});

export default Home;
