import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

const InputForm = ({ label, error, onChange, isSecure }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.errorInput]}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}//si cambiamos el parámetro a true lo muestra con circulitos y false la clave
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  subtitle: {
    width: "90%",
    fontSize: 16,
    fontFamily: "ChivoRegular",
  },
  error: {
    fontSize: 16,
    color: "red",
    fontFamily: "ChivoRegular",
    marginTop: 4,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderBottomColor: colors.black_100,
    padding: 2,
    fontFamily: "ChivoRegular",
    fontSize: 14,
    marginTop: 4,
  },
  errorInput: {
    borderColor: "red",
  },
});