import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { TouchableOpacity } from "react-native";

const OrderItem = ({ item }) => {
  const total = item.items && Array.isArray(item.items)
    ? item.items.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),0)
    : 0;

  const { width, height } = useWindowDimensions();

  // Verificar si item.createdAt es una fecha válida antes de formatearla
  const formattedDate = isValidDate(item.createdAt)
    ? new Date(item.createdAt).toLocaleString()
    : "Fecha no válida";

  return (
    <TouchableOpacity style={styles.card} onPress={()=> {}}>
      <View style={styles.textContainer}>
        <Text style={styles.textDate}>{new Date(item.createdAt).toLocaleString()}</Text>
        <Text style={styles.textTotal}>$ {total}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Función para verificar si una fecha es válida
const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.black_100,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textContainer: {
    width: "70%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textDate: {
    fontFamily: 'ChivoRegular',
    fontSize: 18,
    color: 'white',
  },
  textTotal: {
    fontFamily: 'ChivoBold',
    fontSize: 20,
    color: 'white',
  },
});