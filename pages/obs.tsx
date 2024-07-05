import { Text, TextInput, View } from "react-native";
import BackButton from "../components/BackButton";

export default function Obs(){
    return(
        <View>
            <BackButton value="Voltar" page="Assets"/>
            <Text>Observações</Text>
            <TextInput placeholder="Digite suas observações"></TextInput>
        </View>
    )
}