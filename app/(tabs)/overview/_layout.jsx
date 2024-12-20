import { Stack } from "expo-router";

const OverviewLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          height: 90,
          backgroundColor: "transparent",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default OverviewLayout;
