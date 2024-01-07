import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const Add = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add</Text>
    </SafeAreaView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
});
