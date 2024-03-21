import { StyleSheet, View } from 'react-native';
import React from 'react';

const Card = ({children, style}) => {
  return (
    <View style={{...styles.conteiner, ...style}}>
      {children}
    </View>
  );
};

export default Card

const styles = StyleSheet.create({
    conteiner: {
        shadowColor: "#ffff",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});