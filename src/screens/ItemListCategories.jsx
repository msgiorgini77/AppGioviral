import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";
import * as Animatable from 'react-native-animatable';
import { colors } from '../global/colors';

function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const category = useSelector((state)=> state.shopReducer.value.categorySelected)
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    if (productsFilteredByCategory) {
        const productsRaw = Object.values(productsFilteredByCategory)
        const productsFiltered = productsRaw.filter((product) =>
            product.title.includes(keyword)
        );
        setProducts(productsFiltered);
    }
  }, [productsFilteredByCategory, keyword]);

  return (
    <Animatable.View animation="fadeInDownBig" style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </Animatable.View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white_100,
  },
});