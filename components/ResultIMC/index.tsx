import React from "react"
import { View, Text } from "react-native"
import Form from "../Form"
import { ResultImcDTO } from "../../DTO/ResultImc"

export default function ResultImc(props: ResultImcDTO){
    return(
        <View>
            <Text>{props.imcText}</Text>
            <Text>{props.imcValue}</Text>
        </View>
    )
}