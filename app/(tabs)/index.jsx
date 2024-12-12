import {
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  //////////// STATE VARIABLES ////////////
  const [text, setText] = useState("");

  //////////// HANDLERS ////////////
  const handleKeyDown = (e) => {
    if (e.nativeEvent.key === "Enter") {
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="light" />

        <TextInput
          multiline
          spellCheck={false}
          numberOfLines={4}
          maxLength={50}
          placeholder="What's on your mind? 💭"
          style={styles.text}
          onChangeText={(newText) => {
            setText(newText);
          }}
          onEndEditing={() => {
            setText(text.trim());
          }}
          onKeyPress={(e) => {
            handleKeyDown(e);
          }}
          value={text}
          returnKeyType="done"
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Inter_600SemiBold",
    fontSize: 60,
    height: "calc(100vh - 180)",
  },
});

export default Index;
