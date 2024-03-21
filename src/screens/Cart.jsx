import { FlatList, Pressable, StyleSheet, Text, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { usePostOrderMutation } from "../services/shopService";
import { colors } from '../global/colors';
import { clearCart } from "../features/shop/cartSlice";

const Cart = ()=> {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation();
  const dispatch = useDispatch();
  const date = new Date().toLocaleString();
  const {user} = useSelector(state => state.authReducer.value)

  const confirmCart = ()=> {
    triggerPost({ total, cartItems,date, user: user})
    dispatch(clearCart())
    Alert.alert( 'successful purchase','successful purchase' [
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ])
  }

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            style={styles.list}
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text style={styles.text}>Total: ${total}</Text>
          <Pressable style={styles.confirmContainer} onPress={confirmCart}>
            <Text style={styles.confirmText}>Confirm</Text>
          </Pressable>
        </>
      ) : (
        <Text style={styles.confirmText}>No products added</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.black_100,
  },
  list: {
    width: "100%",
  },
  confirmContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.chartreuse_100,
    padding: 8,
    width: '50%',
    borderRadius: 10,
  },
  confirmText: {
    fontFamily: 'ChivoBold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'ChivoBold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 8,
  },
})