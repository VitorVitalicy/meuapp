//BIBLIOTECAS:
import { Pressable, ScrollView, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//LOCAL FILES:
import styles from "../styles";
import { RootStackParamList } from "../scripts/navigationProp";

//Icons:
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Items } from "./Items";



export function ScrollItems() {
  const [size, setSize] = useState(40)

  return (
    <View style={{alignItems: "center"}}>
      <ScrollView 
        contentContainerStyle={{gap: 20, paddingBottom:1000 }} 
        style={styles.containerOptions}
        //StickyHeaderComponent={<Text>alguma coisa</Text>}
      >
        <Items 
          text="Dados Vendas" 
          icon={<FontAwesome name="sellsy" size={size} color="black" />}
          nextPage=""
        />

        <Items 
          text="Introdução" 
          icon={<MaterialIcons name="subtitles" size={size} color="black" />}
          nextPage="Intro"
        />

        <Items 
          text="Perguntas" 
          icon={<MaterialCommunityIcons name="frequently-asked-questions" size={size} color="black" />}
          nextPage=""
        />
        
        <Items 
          text="Fotos" 
          icon={<MaterialIcons name="photo-album" size={size} color="black" />}
          nextPage=""
        />
       
        <Items 
          text="Relatórios" 
          icon={<Foundation name="clipboard-notes" size={size} color="black" />}
          nextPage=""
        />
        <Items 
          text="Observações do Cliente" 
          icon={<FontAwesome name="pencil-square-o" size={size} color="black" />}
          nextPage=""
        />
        <Items 
          text="Anexos" 
          icon={<AntDesign name="paperclip" size={size} color="black" />}
          nextPage="Attachment"
        />
        <Items 
          text="Conclusão" 
          icon={<MaterialCommunityIcons name="clipboard-text-outline" size={size} color="black" />}
          nextPage=""
        />

      </ScrollView>
    </View>
  );
}
