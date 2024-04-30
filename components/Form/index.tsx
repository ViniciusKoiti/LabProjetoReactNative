import React, { useState } from "react"
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import ResultImc from "../ResultIMC";
import { calculateImc } from "../../service/imcService";
import style from "./form.style";

export default function Form(){
    const {formContext,form, formLabel, input, buttonCalculator, textButtonCalculator } = style;
    
    const [height, setHeight] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [messageImc, setMessageImc] = useState("Preenchao Peso e a altura");
    const [imc, setImc] = useState<number>(0);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator(): void{
        height && weight ? setImc(calculateImc(weight, height)) :  setMessageImc("Preencha o peso e altura");
    }

    function validationImc(): void{
        if(height && weight){
            imcCalculator();
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular novamente");
            return;
        }
        setImc(0);
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura");

       
    }

    return(
        <View style={formContext }>
            <View style={form}>
                <Text 
                style={formLabel}>
                    Altura</Text>
                <TextInput
                style={input}
                onChangeText={(height:string) => setHeight(height ? parseFloat(height) : null)}
                placeholder="1.75"
                keyboardType="numeric" 
                ></TextInput>
                <Text
                 style={formLabel}
                >Peso</Text>
                <TextInput
                style={input}
                onChangeText={(peso) => setWeight(peso ? parseFloat(peso) : null)}
                placeholder = "75.00"
                keyboardType="numeric"
                ></TextInput>

                <TouchableOpacity 
                onPress={validationImc}
                style={buttonCalculator}
                ><Text style={textButtonCalculator}>
                    {textButton}
                    </Text></TouchableOpacity>
                
            </View>
            <ResultImc imcText={messageImc} imcValue={imc} />
        </View>
    );
}