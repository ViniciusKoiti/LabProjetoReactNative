import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "../ResultIMC";

export default function Form(){

    
    const [height, setHeight] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [messageImc, setMessageImc] = useState("Preenchao Peso e a altura");
    const [imc, setImc] = useState<number>(0);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator(): void{
        height && weight ? setImc(Number((weight / height * height).toFixed(2))) : setMessageImc("Preencha o peso a altura Por favor")
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
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={(height:string) => setHeight(height ? parseFloat(height) : null)}
                placeholder="1.75"
                keyboardType="numeric" 
                ></TextInput>
                <Text
                
                >Peso</Text>
                <TextInput
                onChangeText={(peso) => setWeight(peso ? parseFloat(peso) : null)}
                placeholder = "75.00"
                keyboardType="numeric"
                ></TextInput>

                <Button 
                onPress={validationImc}
                title={textButton}
                />
                
            </View>
            <ResultImc imcText={messageImc} imcValue={imc} />
        </View>
    );
}