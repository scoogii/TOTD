import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TOTD</Text>
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

export default Index;
