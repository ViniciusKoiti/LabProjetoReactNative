import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import Form from "../Form"
import { ResultImcDTO } from "../../DTO/ResultImc"
import style from "./resultImc.style"

export default function ResultImc(props: ResultImcDTO){
    
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu imc hoje é: {{props.imcValue}}`
        })
    }
    
    const {resultImc, boxShareButton, buttonShare, textShare} = style;
    
    return(
        <View style={resultImc}>
            <View style={boxShareButton}>
                {props.imcValue != null ? 
                <TouchableOpacity style={buttonShare}>
                    <Text style={textShare}>Share your result</Text>
                </TouchableOpacity>
                :
               
            <View style={{display: 'none'}}></View> 
                }
            </View>
            <Text>{props.imcText}</Text>
            <Text>{props.imcValue}</Text>
        </View>
    )
}