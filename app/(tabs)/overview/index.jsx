import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";

const OverviewIndex = () => {
  //////////// STATE VARIABLES ////////////
  const [dates, setDates] = useState([]);

  //////////// FETCH ////////////
  const fetchDates = async () => {
    const response = await fetch(
      "https://totd-backend-tpky.onrender.com/dates",
      {
        method: "GET",
      },
    );

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

  //////////// HANDLERS ////////////
  const handleDayPress = (date) => {
    if (Object.hasOwn(dates, date)) {
      router.push(`./${date}`, { relativeToDirectory: true });
    }
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
        style={{
          paddingTop: 90,
        }}
        theme={{
          calendarBackground: "#000",
          monthTextColor: "#FFF",
          textMonthFontFamily: "Inter_600SemiBold",
          dayTextColor: "#FFF",
          todayTextColor: "#81add6",
          textDayHeaderFontSize: 14,
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayFontWeight: "bold",
          textSectionTitleColor: "#81add6",
        }}
        futureScrollRange={0}
        onDayPress={(day) => {
          handleDayPress(day.dateString);
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
    backgroundColor: "#transparent",
  },
});

export default OverviewIndex;
