import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions, Alert } from 'react-native'
import React from 'react'
import { colors } from "../global/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/shop/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const remove = () => {
      dispatch(removeItem(item.id))
      Alert.alert( `You deleted \n ${item.title} \n from cart`,'Deletion successful' [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ])
    }
    const { width, height } = useWindowDimensions();
        return (
            <View style={width < 400 ? styles.container : styles.containerMain}>
            <View>
                <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>{item.title}</Text>
                </View>
                <View>
                <Image source={{ uri: item.thumbnail }} style={styles.icono} />
                </View>
                <View style={styles.containerDescripcion}>
                <Text style={styles.cantidad}>Cantidad: {item.quantity}</Text>
                <Text style={styles.precio}>Precio unitario: ${item.price}</Text>
                </View>
            </View>

            <Pressable style={styles.delete} onPress={remove}>
            <MaterialCommunityIcons name="delete-forever" size={24} color="white" />
                <Text>Delete</Text>
            </Pressable>
            </View>
        )
};

export default CartItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.chartreuse_100,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    height: 100,
  },
  containerMain: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: colors.gray_100,
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    margin:10,
    borderRadius:10,
    padding:10,

  },
  titulo: {
    fontSize: 20,
    color: colors.chartreuse_100,
    fontFamily:'ChivoBold',
  },
  containerDescripcion: {
    gap: 5
  },
  cantidad: {
    fontSize: 18,
    color: colors.white_100,
    fontFamily:'ChivoBold',
  },
  precio: {
    fontSize: 18,
    color: colors.white_100,
    fontFamily:'ChivoBold',
  },
  icono: {
    height: 60,
    width: 60,
    alignItems: 'center',
  },
  delete: {
    color: colors.black_100, 
    fontSize: 16,
    fontFamily:'ChivoBold',
    alignContent: 'center',
    alignItems: 'center',
  },
})