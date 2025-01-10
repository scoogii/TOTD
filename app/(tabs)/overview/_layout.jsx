import { Stack } from "expo-router";

const OverviewLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
          borderBottomWidth: 0,
          height: 90,
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
