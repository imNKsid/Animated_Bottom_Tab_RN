import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Bottom"), 2000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.logoText}>olx</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
  },
  logoText: {
    fontSize: 58,
    fontWeight: "bold",
  },
});
