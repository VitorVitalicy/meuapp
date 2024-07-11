import React, { useState } from "react";
import { View, Button, Text, StyleSheet, SafeAreaView } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import BackButton from "../../components/BackButton";
import PopUp from "../../components/popUp";
import styles from "../../styles";

const Attachment = () => {
  const [fileName, setFileName] = useState(null);

  const handleFilePick = async () => {
    try {
      const fileName = await DocumentPicker.getDocumentAsync({
        namedParameters: {
          copyToCacheDirectory: true,
          multiple: true,
          type: "*/*",
        },
      });
      console.log(fileName);
    } catch (err) {
      console.log("Erro ao selecionar o arquivo:", err);
    }
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <View style={[styles.sideBySide, styles.Btw, styles.headerIcons]}>
        <BackButton value="Voltar" page="Assets" />
        <PopUp />
      </View>

      <Text style={styles.titleIntro}>Envio de Anexos</Text>

      <Button title="Selecionar Arquivo" onPress={handleFilePick} />
      {fileName && <Text style={styles.fileName}>{fileName}</Text>}
    </SafeAreaView>
  );
};

export default Attachment;
