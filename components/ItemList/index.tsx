import React, { useState } from "react"
import { Text, View } from "react-native";
import style from "./item.style";

interface ItemListProps {
    number: number;
  };

export default function ItemList(number: ItemListProps){



    const {item, titleStyle} = style;

    return( 
        <View style={item}>
          <Text style={titleStyle}>{number.number}</Text>
        </View>
      );
}