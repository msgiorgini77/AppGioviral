import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";

const Search = ({onSearch}) => {
    const [input, setInput] = useState ('');

    // Función para manejar la búsqueda
    const handleSearch = () => {
        if (input) {
            onSearch(input);
        }
    };

    // Función para eliminar el texto de entrada
    const removeInput = () => {
        setInput('');
    };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput 
                onChangeText={setInput} 
                value={input} 
                style={styles.input} 
                placeholder='Buscar servicio...'>
            </TextInput>
            <Pressable onPress={handleSearch}>
                <AntDesign name="search1" size={25} color="black"></AntDesign>
            </Pressable>
            <Pressable onPress={removeInput}>
                <Entypo name="circle-with-cross" size={25} color="black"></Entypo>
            </Pressable>
        </View>
    </View>
  );
};

export default Search

const styles = StyleSheet.create({
    container:  {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: Constants.statusBarHeigth,
        paddingHorizontal: 14,
        width: '90%',
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        paddingTop: 10,
    },
    input: {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        width: "80%",
        fontSize: 20,
    },
});