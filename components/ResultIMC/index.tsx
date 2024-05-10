import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import { ResultImcDTO } from "../../DTO/ResultImc"
import style from "./resultImc.style"

export default function ResultImc(props: ResultImcDTO){
    
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu imc hoje é: ${props.imcValue}`
        })
    }
    
    const {resultImc, boxShareButton, buttonShare, textShare, resultValue} = style;

    
    return(
        <View style={resultImc}>
            <View style={boxShareButton}>
                {props.imcValue ? 
                <TouchableOpacity onPress={onShare} style={buttonShare}>
                    <Text style={textShare}>Share your result</Text>
                </TouchableOpacity>
                :
                 <View></View> 
                }
            </View>
            <Text style={resultImc}>{props.imcText}</Text>
            <Text style={resultValue}>{props.imcValue}</Text>
            <Text style={resultValue}>80</Text>
        </View>
    )
}