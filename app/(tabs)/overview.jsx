import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";

const Overview = () => {
  //////////// STATE VARIABLES ////////////
  const [dates, setDates] = useState([]);

  //////////// FETCH ////////////
  const fetchDates = async () => {
    const response = await fetch("http://localhost:3000/dates", {
      method: "GET",
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    let markedDates = {};
    data.map((item) => {
      markedDates[item.date] = {
        selected: true,
        selectedColor: "#81add6",
      };
    });

    setDates(markedDates);
  };

  //////////// USE EFFECTS ////////////
  useFocusEffect(
    useCallback(() => {
      fetchDates();
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
          textDayFontSize: 16,
          textMonthFontSize: 24,
          textDayFontWeight: "bold",
          textSectionTitleColor: "#81add6",
        }}
        futureScrollRange={0}
        onDayPress={(day) => {
          console.log(day);
        }}
        markedDates={dates}
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
