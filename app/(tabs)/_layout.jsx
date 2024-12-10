import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

const TabLayout = () => {
  const [loaded, error] = useFonts({
    Inter_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
          borderTopWidth: 1,
          backgroundColor: "#000",
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
              style={{ marginTop: 30, height: 40 }}
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
              style={{ marginTop: 30, height: 40 }}
            />
          ),
          headerTitle: "Overview",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
