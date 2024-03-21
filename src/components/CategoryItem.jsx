import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategories", { category });
  };

  return (
    <Pressable onPress={handlePress}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: {
      height: 5,
      width: 3,
    },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  text: {
    backgroundColor: colors.chartreuse_100,
    fontSize: 22,
    color: "black",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontFamily: "ChivoBold",
    padding: 8,
    borderRadius: 10,
  },
});
