import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TodoScreen from "../screens/TodoScreen";
import OnProgressScreen from "../screens/OnProgressScreen";
import FinishedScreen from "../screens/FinishedScreen";

const Tab = createMaterialTopTabNavigator();

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;

              if (route.name === "Todo") {
                iconName = "check-box-outline";
              } else if (route.name === "OnProgress") {
                iconName = "progress-clock";
              } else if (route.name === "Finished") {
                iconName = "check-circle-outline";
              }

              return <Icon name={iconName} size={24} color={color} />;
            },

            tabBarShowIcon: true,
            tabBarActiveTintColor: "#44E41CFF",
            tabBarInactiveTintColor: "#8E4BEBFF",
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
            tabBarIndicatorStyle: { backgroundColor: "#EB4343FF" },
            tabBarLabel: ({ focused }) => {
              let tabLabel;

              if (route.name === "Todo") {
                tabLabel = "Akan dikerjakan";
              } else if (route.name === "OnProgress") {
                tabLabel = "Sedang Dikerjakan";
              } else if (route.name === "Finished") {
                tabLabel = "Selesai";
              }
              return tabLabel;
            },
            tabBarStyle: { backgroundColor: "#FFFFFF", elevation: 4 },
          })}
        >
          <Tab.Screen name="Todo" component={TodoScreen} />
          <Tab.Screen name="OnProgress" component={OnProgressScreen} />
          <Tab.Screen name="Finished" component={FinishedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
