import React from "react"
import { View, Text } from "react-native"
import Form from "../Form"
import { ResultImcDTO } from "../../DTO/ResultImc"
import style from "./resultImc.style"

export default function ResultImc(props: ResultImcDTO){
    
    const {resultImc} = style;
    
    return(
        <View style={resultImc}>
            <Text>{props.imcText}</Text>
            <Text>{props.imcValue}</Text>
        </View>
    )
}