import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const Wishlist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Wishlist</Text>
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
