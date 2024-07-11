//LIBRARIES:
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

//Local files:
import PopUp from "../components/popUp";
import styles from "../styles";
import Radio from "../components/radios";
import BackButton from "../components/BackButton";
import { useClientDB } from "../database/useClientDB";
import { ScrollItems } from "../components/ScrollItems";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getClientStorage from "../scripts/getClientStorage";

function Assets() {
  //const clientDB = useClientDB();
  const [valueDrop, setValueDrop] = useState("");
  const [client, setClient] = useState({});

  // useEffect(() => {
  //   const readName = async () => {
  //     try {
  //       const response = await clientDB.searchLine();
  //       setClient(response);
  //     } catch (error) {
  //       console.log(`Erro ao ler o banco de dados: ${error}`);
  //     }
  //   };
  //   readName();
  // }, []);

  useEffect(() => {
    const asynAux = async () => {
      const readClient = await getClientStorage();
      setClient(readClient);
    };
    asynAux();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.sideBySide, styles.Btw, styles.headerIcons]}>
        <BackButton value="Voltar" page="Clients" />
        <PopUp />
      </View>

      <View style={{ marginBottom: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>{client.nome_cliente}</Text>
      </View>

      <View style={{ marginBottom: 20, gap: 8 }}>
        <View style={styles.info}>
          <Text>Tipo de vistoria</Text>
          <Text>{client.tipo_nome}</Text>
        </View>
        <View style={styles.info}>
          <Text>Data de Vistoria:</Text>
          <Text>{client.data_vistoria}</Text>
        </View>
        <View style={styles.info}>
          <Text>Responsável:</Text>
          <Text>{client.responsavel_vistoria}</Text>
        </View>
      </View>

      
      <Picker
        selectedValue={valueDrop}
        onValueChange={(itemValue, itemIndex) => {
          setValueDrop(itemValue)
          console.log(`Valor modificado para: ${itemValue} de id: ${itemIndex}`)
        }}
        style={{borderWidth: 3}}
      >
        <Picker.Item label="Escolher ambiente" value="null" style={{backgroundColor:"#d6d6d6"}}/>
        <Picker.Item label="Cozinha " value="Cozinha 2" />
        <Picker.Item label="Banho-Casal" value="Banho-Casal" />
        <Picker.Item label="Quarto-Filho" value="Quarto-Filho" />
      </Picker>

      {/* <Radio leftName="Visualizar" rightName="Adicionar" /> */}

      <ScrollItems />
    </SafeAreaView>
  );
}

export default Assets;
