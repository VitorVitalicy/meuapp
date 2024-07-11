import React, { useEffect, useRef, useState } from "react";
import { View, Button, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import BackButton from "../../components/BackButton";
import PopUp from "../../components/popUp";
import styles from "../../styles";
import getClientStorage from "../../scripts/getClientStorage";

const Intro = () => {
  const richText = useRef(null);
  const [client, setClient] = useState({});
  const [intro, setIntro] = useState("")

  useEffect(() => {
    const asynAux = async () => {
      const readClient = await getClientStorage();
      setClient(readClient);
    };
    asynAux();
  }, []);

  return (
    <View style={styles.containerIntro}>
      <View style={[styles.sideBySide, styles.Btw, styles.headerIcons]}>
        <BackButton value="Voltar" page="Assets" />
        <PopUp />
      </View>

      <Text style={styles.titleIntro}>Introdução</Text>

      <RichToolbar
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.setStrikethrough,
          actions.undo,
          actions.redo,
        ]}
        style={styles.richToolbar}
      />
      <ScrollView>
        <RichEditor
          ref={richText}
          style={styles.richEditor}
          placeholder="Escreva aqui..."
          initialContentHTML={client.introducao}
          useContainer={true}
        />
      </ScrollView>
        <Button  
          color="green"
          title="Salvar" 
          onPress={async ()=>{
            const value = await richText.current.getContentHtml()
            console.log(value)
          }}/>
    </View>
  );
};

export default Intro;
