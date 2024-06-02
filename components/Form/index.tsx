import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native"
import ResultImc from "../ResultIMC";
import { calculateImc } from "../../service/imcService";
import style from "./form.style";
import List, { ListProps } from "../List";

export default function Form() {

    const { formContext, form,
        formLabel, input,
        buttonCalculator,
        textButtonCalculator, textErrorMessage,
        exhibitResultImc,
        listEspace
    } = style;

    const [imcList, setImcList] = useState<ListProps>({ listArrayNumber: [], title: '' });
    const [height, setHeight] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [messageImc, setMessageImc] = useState("Preenchao Peso e a altura");
    const [imc, setImc] = useState<number>(0);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessageHeight, setErrorMessageHeight] = useState<String | null>(null);
    const [errorMessageWeight, setErrorMessageWeight] = useState<String | null>(null);

    function imcCalculator(): void {
        height && weight ? setImc(calculateImc(weight, height)) : setMessageImc("Preencha o peso e altura");
    }

    const addImcValue = (newValue: number) => {
        setImcList((prevList: ListProps) => ({
            listArrayNumber: [...prevList.listArrayNumber, { number: newValue }], title: "IMC"
        }));
    };

    function validationImc(): void {
        console.log(imc);
        if (imc) {
            addImcValue(imc);
            setImc(0);
            setHeight(0);
            setWeight(0);
            return;
        }


        if (height && weight) {
            imcCalculator();
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular novamente");
            setErrorMessageHeight(null);
            setErrorMessageWeight(null);
            return;
        }

        if (!height) {
            setErrorMessageHeight("Preciso que informe sua altura!");
            return;
        }
        if (!weight) {
            setErrorMessageWeight("Preciso que informe seu peso!");
            return;
        }


        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");


    }

    return (
        <View style={formContext}>
            {imc === 0 ?
                <Pressable onPress={Keyboard.dismiss} style={form}>

                    <Text
                        style={formLabel}>
                        Altura</Text>
                    <Text style={textErrorMessage}>
                        {errorMessageHeight}
                    </Text>
                    <TextInput
                        style={input}
                        onChangeText={(height: string) => setHeight(height ? parseFloat(height.replace(/,/g, '.')) : null)}
                        placeholder="1.75"

                        keyboardType="numeric"
                    ></TextInput>
                    <Text
                        style={formLabel}
                    >Peso</Text>

                    <Text style={textErrorMessage}>
                        {errorMessageWeight}
                    </Text>
                    <TextInput
                        style={input}
                        onChangeText={(peso) => setWeight(peso ? parseFloat(peso) : null)}
                        placeholder="75.00"
                        keyboardType="numeric"
                    ></TextInput>


                </Pressable>

                :
                <View style={exhibitResultImc}>
                    <ResultImc imcText={messageImc} imcValue={imc} />
                </View>

            }

            <TouchableOpacity
                onPress={validationImc}
                style={buttonCalculator}
            ><Text style={textButtonCalculator}>
                    {textButton}
                </Text></TouchableOpacity>

            <View style={listEspace}>
                <List listArrayNumber={imcList.listArrayNumber} title='IMC'/>
            </View>



        </View>
    );
}