import { StyleSheet, Text, View } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Inter_900Black" }}>Calendar</Text>
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
    fontFamily: "Inter_900Black",
    fontSize: 32,
  },
});

export default Calendar;
