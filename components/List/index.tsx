import { FlatList, Text, View } from "react-native";
import ItemList from "../ItemList";
import style from "./list.style";

export interface ListItem {
    number: number;
  }

export interface ListProps {
    listArrayNumber: ListItem[],
    title: string,
}

export default function List(props: ListProps) {

    console.log(props)

    const {heightView, listContainer, listTitleContainer,titleContainer} = style


    return (
        <View style={listContainer}>
            <View style={listTitleContainer}>
                <Text style={titleContainer}>{props.title}</Text>
            </View>
            <View  style={heightView} >
            <FlatList
            
                data={props.listArrayNumber}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({ item }) => <ItemList number={item.number} />}
            />
            </View>
            
        </View>
    );
}