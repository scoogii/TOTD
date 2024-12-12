import { Stack, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const DatePreview = () => {
  const date = usePathname().split("/")[2];

  //////////// STATE VARIABLES ////////////
  const [day, setDay] = useState({});

  //////////// FETCH ////////////
  const getDay = async () => {
    const response = await fetch(`http://localhost:3000/day/${date}`, {
      method: "GET",
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setDay(data[0]);
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
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Inter_600SemiBold",
    fontSize: 60,
    height: "calc(100vh - 180)",
  },
});
