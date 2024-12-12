import { Stack } from "expo-router";

const OverviewLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          height: 90,
          fontSize: 30,
          backgroundColor: "transparent",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Overview",
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default OverviewLayout;
