import { StyleSheet, Text, Image, Pressable, useWindowDimensions, View } from "react-native";
import Card from "./Card";
import React, { useEffect, useState } from "react";

const ProductItem = ({ product, navigation }) => {
    const [isPortrait, setIsPortrait] = useState(true);
    const [isLandscape, setIsLandscape] = useState(false);

    const { width, height } = useWindowDimensions();
  
    useEffect(()=> {
      if(height > width) {
        setIsPortrait(true);
        setIsLandscape(false);
      } else {
        setIsPortrait(false);
        setIsLandscape(true);
      }
    }, [width, height])

    return (
      <View style={styles.container}>
        <Pressable style={styles.card} onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
          <Card style={styles.items}>
            <Text style={width < 350 ? styles.textMin : styles.text}>{product.title}</Text>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: product.thumbnail }}
              />
          </Card>
        </Pressable>
      </View>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  card: {
    height: 100,
    padding: 15,
    margin: 2,
    borderWidth: 4,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  items: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    minHeight: 90,
    minWidth: 90,
    width: "30%",
    borderRadius: 5,
  },
  text: {
    width: "70%",
    fontFamily: "ChivoBold",
    fontSize: 18,
    alignContent: 'center',
    paddingHorizontal: 1,
    paddingVertical: 18,
  },
  textMin: {
    width: "70%",
    fontFamily: "ChivoRegular",
    fontSize: 15,
  },
});