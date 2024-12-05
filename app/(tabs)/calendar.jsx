import { StyleSheet, Text, View } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121621",
  },
  text: {
    color: "#FFF",
  },
});

export default Calendar;
