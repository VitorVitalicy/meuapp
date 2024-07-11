import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  onClick: () => void;
};

export default function ButtonUpdate({ onClick, ...rest }: Props) {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        {...rest}
        style={{
          backgroundColor: "gray",
          height: 50,
          width: "40%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          gap: 10,
        }}
        onPress={onClick}
      >
        <Text>Buscar mais</Text>
        <Ionicons name="reload-outline" size={36} color="black" />
      </TouchableOpacity>
    </View>
  );
}
