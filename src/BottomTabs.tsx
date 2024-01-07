import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Add, Home, User, Wishlist } from "./screens";
import CustomBottomTab from "./components/Tab/CustomBottomTab";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Add} />
        <Tab.Screen name="Favourites" component={Wishlist} />
        <Tab.Screen name="Profile" component={User} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default BottomTabs;
