import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const DatePreview = () => {
  const router = useRouter();
  const date = usePathname().split("/")[2];

  //////////// STATE VARIABLES ////////////
  const [day, setDay] = useState({});

  //////////// FETCH ////////////
  const getDay = async () => {
    const response = await fetch(
      `https://totd-backend-tpky.onrender.com/day/${date}`,
      {
        method: "GET",
      },
    );

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setDay(data[0]);
  };

  //////////// USE EFFECTS ////////////
  const handleRemove = async () => {
    const response = await fetch(
      `https://totd-backend-tpky.onrender.com/day/${day.id}`,
      {
        method: "DELETE",
      },
    );

    const data1 = await response.json();

    if (data1.error) {
      alert(data1.error);
      return;
    }

    alert("Thought deleted!");
    router.back();
  };

  //////////// USE EFFECTS ////////////
  useEffect(() => {
    getDay();
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerTitle: date, headerShown: true }} />

      <View style={styles.container}>
        <Text style={styles.text}>{day.thought}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1.0 },
            { backgroundColor: "#e02e22" },
            styles.button,
          ]}
          onPress={() => {
            handleRemove();
          }}
        >
          <Text style={styles.buttonText}>Remove</Text>
          <MaterialCommunityIcons
            name="delete-outline"
            size={32}
            color="#8a1e16"
          />
        </Pressable>
      </View>
    </>
  );
};

export default DatePreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 90,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Inter_600SemiBold",
    fontSize: 32,
    height: "calc('100vh - 180')",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    height: 120,
    backgroundColor: "#000",
    padding: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    height: 60,
    borderRadius: 12,
    gap: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    color: "#FFF",
  },
});
