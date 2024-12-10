import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
          borderBottomWidth: 1,
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#FFF",
        tabBarStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          borderTopWidth: 1,
          height: 110,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="calendar-day"
              color={color}
              size={32}
              style={{ marginTop: 32, height: 40 }}
            />
          ),
          headerTitle: "Thought of the Day",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="calendar-days"
              color={color}
              size={32}
              style={{ marginTop: 32, height: 40 }}
            />
          ),
          headerTitle: "Overview",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
