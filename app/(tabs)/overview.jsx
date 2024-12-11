import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CalendarList } from "react-native-calendars";

const Overview = () => {
  //////////// STATE VARIABLES ////////////
  const [days, setDays] = useState([]);

  //////////// FETCH ////////////
  const fetchDays = async () => {
    const response = await fetch("http://localhost:3000/days", {
      method: "GET",
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setDays(data);
  };

  //////////// USE EFFECTS ////////////
  useFocusEffect(
    useCallback(() => {
      fetchDays();
    }, []),
  );

  return (
    <View style={styles.container}>
      <CalendarList
        theme={{
          calendarBackground: "#000",
          monthTextColor: "#FFF",
          textMonthFontFamily: "Inter_700Bold",
          dayTextColor: "#FFF",
          todayTextColor: "#81add6",
          textDayHeaderFontSize: 14,
          textDayFontSize: 18,
          textMonthFontSize: 24,
          textDayFontWeight: "bold",
          textSectionTitleColor: "#81add6",
        }}
        futureScrollRange={0}
        onDayPress={(day) => {
          console.log(day);
        }}
        markedDates={{
          "2024-12-10": {
            selected: true,
            selectedColor: "#81add6",
          },
          "2024-12-09": {
            selected: true,
            selectedColor: "#81add6",
          },
          "2024-12-08": {
            selected: true,
            selectedColor: "#81add6",
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#FFF",
    fontFamily: "Inter_700Bold",
    fontSize: 32,
  },
});

export default Overview;
