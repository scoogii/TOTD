import {
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  View,
  Pressable,
  Text,
  Alert,
  AppState,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import * as Notifications from "expo-notifications";

const Index = () => {
  const currentDate = moment(new Date()).format("YYYY-MM-DD");
  const appState = useRef(AppState.currentState);

  //////////// STATE VARIABLES ////////////
  const [text, setText] = useState("");

  //////////// HANDLERS ////////////
  const getToday = async () => {
    const response = await fetch(
      `https://totd-backend-tpky.onrender.com/day/${currentDate}`,
      {
        method: "GET",
      },
    );

    const data1 = await response.json();

    if (data1.error) {
      alert(data1.error);
      return;
    }

    if (!data1[0].thought) {
      setText("");
    }

    setText(data1[0].thought);
  };

  const handleSave = async () => {
    if (!text) {
      Alert.alert("Empty thoughts 💭", "Write a thought before saving!");
    }

    // Check if this day has already been logged
    const response1 = await fetch(
      `https://totd-backend-tpky.onrender.com/day/${currentDate}`,
      {
        method: "GET",
      },
    );

    const data1 = await response1.json();

    if (data1.error) {
      alert(data1.error);
      return;
    }

    // If empty, save as a new thought
    if (data1.length === 0) {
      const response2 = await fetch(
        "https://totd-backend-tpky.onrender.com/day",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            date: currentDate,
            thought: text,
          }),
        },
      );

      const data2 = await response2.json();

      if (data2.error) {
        alert(data2.error);
      }

      Alert.alert("Success", "Thought has been logged!");
      return;
    }

    // Prevent same thought from being updated
    const thought = data1[0].thought;
    if (text === thought) {
      Alert.alert("Same Thought", "This is the same thought for today!");
      return;
    }

    // Else, edit thought for current day
    const id = data1[0].id;
    const response3 = await fetch(
      `https://totd-backend-tpky.onrender.com/day/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          date: currentDate,
          thought: text,
        }),
      },
    );

    const data3 = await response3.json();

    if (data3.error) {
      alert(data3.error);
    }

    Alert.alert("Success", "Thought for today has been updated!");
  };

  //////////// USE EFFECTS ////////////
  useEffect(() => {
    getToday();
  }, []);

  useEffect(() => {
    if (appState.current !== "active") {
      if (currentDate !== moment(new Date()).format("YYYY-MM-DD")) {
        setText("");
      }
    }
  }, [appState]);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <StatusBar style="light" />

          <TextInput
            multiline
            spellCheck={false}
            maxLength={220}
            placeholder={"What's on your mind? 💭"}
            style={styles.text}
            onChangeText={(newText) => {
              setText(newText);
            }}
            onEndEditing={() => {
              setText(text.trim());
            }}
            value={text}
            returnKeyType="return"
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1.0 },
            { backgroundColor: "#38ab3c" },
            styles.button,
          ]}
          onPress={() => {
            handleSave();
          }}
        >
          <Text style={styles.buttonText}>Log Thought</Text>
          <Feather name="check-square" size={28} color="green" />
        </Pressable>
      </View>
    </>
  );
};

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
    textAlign: "left",
    color: "#FFF",
    fontFamily: "Inter_600SemiBold",
    fontSize: 26,
    maxHeight: 500,
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
    width: 200,
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

export default Index;
