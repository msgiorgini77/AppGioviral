import { FlatList, StyleSheet, Text, View ,ActivityIndicator} from "react-native";
import OrderItem from "../components/OrderItem";
import {useGetOrdersQuery} from '../services/shopService';
import {colors} from '../global/colors';

const Orders = () => {
  const{data: orders, isLoading} = useGetOrdersQuery();
  if(isLoading){
    return (<View style={styles.containerLoad}>
      <ActivityIndicator size="large" color={colors.chartreuse_100}/>
    </View>)
  }
  const ordersObject = orders || {};
  const ordersArray = Object.keys(ordersObject).map((key)=>({
    id:key,
    ...ordersObject[key]
  }))
  return (
    <View style={styles.container}>
      {ordersArray.length > 0 ? (
      <FlatList
        data={ordersArray}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(order) => order.id}
        style={styles.flatlist}
      />
    ) : (
      <View style={styles.containerNoOrders}>
        <Text style={styles.noOrders}>There are no orders placed.</Text>
      </View>
    )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  containerLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noOrders: {
    fontSize: 30,
    backgroundColor: colors.chartreuse_100,
    color: colors.gray_100,
    padding: 40,
    fontFamily: 'ChivoBold',
    borderRadius: 15
  },
  containerNoOrders: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.chartreuse_100,

  },
  container: {
    flex: 1,
    backgroundColor: colors.white_100,
  },
  flatlist: {
    flex: 1,
  }
});