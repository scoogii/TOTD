import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#141a27",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#ffb56b",
        tabBarStyle: {
          backgroundColor: "#141a27",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "TOTD",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="calendar-day" color={color} size={24} />
          ),
          headerTitle: "Thought of the Day",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Overview",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="calendar-days" color={color} size={24} />
          ),
          headerTitle: "Overview",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
