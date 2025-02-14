import { Inter_600SemiBold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import moment from "moment";

SplashScreen.preventAutoHideAsync();

const TabLayout = () => {
  //////////// STATE VARIABLES ////////////
  const date = moment(new Date()).format("DD/MM/YYYY");

  const [loaded, error] = useFonts({
    Inter_600SemiBold,
  });

  //////////// USE EFFECTS ////////////
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
          borderBottomWidth: 0,
          height: 90,
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#FFF",
        tabBarStyle: {
          borderTopWidth: 1,
          backgroundColor: "#000",
          height: 90,
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
          headerTitle: `✨ Thought of the Day ✨ · ${date}`,
        }}
      />

      <Tabs.Screen
        name="overview"
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
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
