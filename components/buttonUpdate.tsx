import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonUpdate() {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
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
        onPress={() => {}}
      >
        <Text>Buscar mais</Text>
        <Ionicons name="reload-outline" size={36} color="black" />
      </TouchableOpacity>
    </View>
  );
}
