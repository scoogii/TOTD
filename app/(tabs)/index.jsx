import {
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

const Index = () => {
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TextInput
          editable={true}
          multiline={true}
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
          value={text}
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
    fontFamily: "Inter_900Black",
    fontSize: 60,
    height: "calc(100vh - 180)",
  },
});

export default Index;
