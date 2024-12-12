import { StyleSheet, Text, View } from "react-native";

const DatePreview = ({ date }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{date}</Text>
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
