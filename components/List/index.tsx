import { FlatList, Text, View } from "react-native";
import ItemList from "../ItemList";

interface ListItem {
    number: number;
  }

export interface ListProps {
    listArrayNumber: ListItem[]
}

export default function List(listArrayNumber: ListProps) {


    return (
        <View>
            <FlatList
                data={listArrayNumber.listArrayNumber}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({ item }) => <ItemList number={item.number} />}
            />
        </View>
    );
}