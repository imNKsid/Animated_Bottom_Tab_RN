import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const User = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>User</Text>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
});
