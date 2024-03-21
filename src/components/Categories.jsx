import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from "../global/colors";
import Counter from "./Counter";
import { useGetCategoriesQuery } from "../services/shopService";
import { ActivityIndicator } from "react-native";

function Categories({navigation}){
    const { data, isLoading, error } = useGetCategoriesQuery();

    if (isLoading) {
        return (
          <View style={[styles.container, styles.loadingContainer]}>
            <ActivityIndicator size="large" color={colors.chartreuse_100} />
          </View>
        );
      }
    
      if (error) {
        return (
          <View style={[styles.container, styles.errorContainer]}>
            <Text style={styles.errorText}>Error loading categories</Text>
          </View>
        );
      }

    return(
        <View style={styles.container}>
            <Counter />
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <CategoryItem navigation={navigation} category={item}></CategoryItem>
                    )}
                    keyExtractor={(category) => category}>
            </FlatList>
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_100,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    errorContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    errorText: {
      color: "red",
      fontSize: 16,
      fontFamily: "ChivoBold",
    },
});