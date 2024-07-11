import { Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../scripts/navigationProp";

//Icons:
import { MaterialIcons } from "@expo/vector-icons";


export function Items({text, nextPage ,icon}){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    return(
        <TouchableOpacity 
          style={[styles.options, styles.sideBySide]}
          onPress={()=>navigation.navigate(nextPage)}
        >
            {icon}
            <Text style={{flex:1}}>{text}</Text>
            <MaterialIcons name="arrow-forward-ios" size={30} color="black" />
        </TouchableOpacity>
    )
}