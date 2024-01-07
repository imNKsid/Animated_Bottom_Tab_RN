import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type CircleProps = {
  circleX: SharedValue<number>;
};
const circleContainerSize = 50;

const AnimatedCircle = ({ circleX }: CircleProps) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: circleX.value - circleContainerSize / 2 }],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnimatedCircle;
