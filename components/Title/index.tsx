import React from "react"
import { View, Text } from "react-native"
import style from "./title.style"

export default function Title(){
    const { title,boxTitle  } = style;

    return(
        <View style={boxTitle}>
            <Text style={title}>
                Vinicius Koiti!
            </Text>

        </View>
    )
}