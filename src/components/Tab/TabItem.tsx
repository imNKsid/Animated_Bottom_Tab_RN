import { Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";

import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";

import { SCREEN_WIDTH } from "../../constants/screen";
import usePath from "../../hooks/usePath";
import { getPathXCenterByIndex } from "../../utils/path";

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;
const AnimatedIcon = Animated.createAnimatedComponent(Feather); //Creating an animated version of the Tab icon
//createAnimatedComponent function is used to create an animated version of a given React Native component.
//The purpose is to enable the use of animated values and styles to drive animations in a more efficient way.

const TabItem = ({ label, icon, index, activeIndex, onTabPress }: TabProps) => {
  const { curvedPaths } = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  //useSharedValue provides a way to create animated values that can be shared and synchronized across the UI,
  //enabling efficient and performant animations in a React Native app.
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);
  //Calculating the X positions for the icon and label based on the index.

  const iconColor = useSharedValue(
    activeIndex === index + 1 ? "white" : "rgba(128,128,128,0.8)"
  );

  //Adjust Icon color for this first render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      //Color of the selected icon
      iconColor.value = withTiming("black");
    } else {
      //Color of the unselected icon
      iconColor.value = withTiming("rgba(128,128,128,0.8)");
    }
    //withTiming is used for creating smooth timing animations, and it's commonly used
    //when updating animated values in a React Native app.
  }, [activeIndex]);

  //useAnimatedStyle is a hook that facilitates the creation of dynamic & reactive styles for animated components,
  //providing a declarative approach to handling animations
  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: iconPositionX - ICON_SIZE / 2 },
      ],
    };
  });

  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 100;
    return {
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: labelPosition - LABEL_WIDTH / 2 },
      ],
    };
  });

  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }));

  return (
    <>
      <Animated.View style={[tabStyle]}>
        <Pressable
          testID={`tab${label}`}
          //Increasing touchable Area
          hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
          onPress={onTabPress}
        >
          <AnimatedIcon
            name={icon}
            size={25}
            animatedProps={animatedIconProps}
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    alignItems: "center",
    width: LABEL_WIDTH,
  },
  label: {
    color: "rgba(128,128,128,0.8)",
    fontSize: 17,
  },
});

export default TabItem;
