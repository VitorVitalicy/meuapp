// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   Alert,
//   BackHandler,
//   Button,
// } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// //Local Files:
// import styles from "../styles";
// import PopUp from "../components/popUp";
// import Radio from "../components/radios";
// import  ButtonUpdate  from "../components/buttonUpdate";
// import { Client } from "../components/Client";
// import { getClients } from "../scripts/clientsActions";

// //Icons:
// import { Feather } from "@expo/vector-icons";
// import api from "../scripts/api";
// import url from "../docs/url_requisition";

// function Clients() {
//   const navigation = useNavigation();

//   const [search, setSearch] = useState("");
//   const [nameClient, SetNameClient] = useState([]);
//   const [statusSearch, setStatusSearch] = useState(false)
//   const [permissionRequest, setPermissionRequest] = useState(false)

//   // REQUISIÇÃO AO SERVIDOR:
//   useEffect(()=>{
//     const clearAll = async () => {
//       SetNameClient([])
//       setPermissionRequest(!permissionRequest)
//     }
//     clearAll()
//   }, [statusSearch])

//   useEffect(() => {
//     const getClientsInfo = async () => {
//       let current_page = 1
//       const response = await getClients(search, current_page)
//       let last_page = response.data.vistorias.last_page
//       let listNameClient = []
//       //const token = await AsyncStorage.getItem("token");
//       try {
//         do{
//           const response = await getClients(search, current_page)

//           console.log("Operação GET concluída");
//           console.log("Total de Vistorias: " + response.data.vistorias.total);
//           console.log("Vistorias por página: " + response.data.vistorias.per_page);
//           console.log("Página atual: " + response.data.vistorias.current_page);

//           listNameClient = listNameClient.concat(response.data.vistorias.data)

//           current_page++
//           console.log("Última página: "+last_page)
//           console.log("===============================================");

//         }while(current_page<=last_page)

//         SetNameClient(listNameClient)

//       } catch (err) {
//         console.log(`Erro na operação GET: ${err.message}`);
//       }
//     };
//     getClientsInfo();
//   }, [permissionRequest]);

//   // SAIR DO APLICATIVO:
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert("Sair", "Você deseja sair do aplicativo?", [
//         {
//           text: "Cancelar",
//           onPress: () => null,
//           style: "cancel",
//         },
//         { text: "SIM", onPress: () => BackHandler.exitApp() },
//       ]);
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       "hardwareBackPress",
//       backAction
//     );

//     return () => backHandler.remove();
//   }, []);

//   return (
//     <SafeAreaView style={styles.screen}>
//       <View style={[styles.sideBySide, styles.Btw, { marginBottom: "4%" }]}>
//         <Text style={{ fontSize: 24 }}>Lista de Clientes</Text>
//         <PopUp />
//       </View>

//       <View
//         style={[
//           styles.sideBySide,
//           styles.searchContainer,
//           { marginBottom: "6%" },
//         ]}
//       >
//         <Feather name="search" size={26} color="black" />
//         <TextInput
//           style={[styles.search, { flex: 1 }]}
//           placeholder="Pesquisar"
//           onChangeText={setSearch}
//           value={search}
//         />
//         <Button
//           title="Pesquisar"
//           color="gray"
//           onPress={() => {setStatusSearch(!statusSearch)}}>
//         </Button>
//       </View>

//       <Radio leftName="Todos" rightName="Recentes" />

//       <FlatList
//         data={nameClient}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={({ item }) => <Client data={item} />}
//         ListFooterComponent={<ButtonUpdate onClick={() => {}} visibility={true}/>}
//         contentContainerStyle={{ gap: 30, paddingBottom:"60%" }}
//         />

//     </SafeAreaView>
//   );
// }

// export default Clients;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Alert,
  BackHandler,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Local Files:
import styles from "../styles";
import PopUp from "../components/popUp";
import Radio from "../components/radios";
import ButtonUpdate from "../components/buttonUpdate";
import { Client } from "../components/Client";
import { getClients } from "../scripts/clientsActions";

//Icons:
import { Feather } from "@expo/vector-icons";

function Clients() {

  const [search, setSearch] = useState("");
  const [nameClient, SetNameClient] = useState([]);
  const [statusSearch, setStatusSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [permissionRequest, setPermissionRequest] = useState(false);
  const [visible, setVisible] = useState(true);

  // REQUISIÇÃO AO SERVIDOR:
  useEffect(() => {
    const clearAll = () => {
      SetNameClient([]);
      setPage(1);
      setVisible(true);
      setPermissionRequest(!permissionRequest);
    };
    clearAll();
  }, [statusSearch]);

  useEffect(() => {
    const getClientsInfo = async () => {
      let listNameClient = nameClient;
      try {
        const response = await getClients(search, page);

        console.log("Operação GET concluída");
        console.log("Total de Vistorias: " + response.data.vistorias.total);
        console.log(
          "Vistorias por página: " + response.data.vistorias.per_page
        );
        console.log("Página atual: " + response.data.vistorias.current_page);
        console.log(page)

        listNameClient = listNameClient.concat(response.data.vistorias.data);
        setLastPage(response.data.vistorias.last_page);

        console.log("Última página: " + response.data.vistorias.last_page);
        console.log(lastPage);
        console.log("===============================================");

        SetNameClient(listNameClient);
      } catch (err) {
        console.log(`Erro na operação GET: ${err.message}`);
      }
    };
    getClientsInfo();
  }, [permissionRequest, page]);

  // SAIR DO APLICATIVO:
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Sair", "Você deseja sair do aplicativo?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "SIM", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.sideBySide, styles.Btw, styles.headerIcons]}>
        <Text style={{ fontSize: 24 }}>Lista de Clientes</Text>
        <PopUp />
      </View>

      <View
        style={[
          styles.sideBySide,
          styles.searchContainer,
          { marginBottom: "6%" },
        ]}
      >
        <Feather name="search" size={26} color="black" />
        <TextInput
          style={[styles.search, { flex: 1 }]}
          placeholder="Pesquisar"
          onChangeText={setSearch}
          value={search}
        />
        <Button
          title="Pesquisar"
          color="blue"
          onPress={() => {
            setStatusSearch(!statusSearch);
          }}
        ></Button>
      </View>

      <FlatList
        data={nameClient}
        keyExtractor={(item) => String(nameClient.indexOf(item))}
        renderItem={({ item }) => <Client data={item} />}
        ListFooterComponent={
          visible && (
            <ButtonUpdate
              onClick={() => {
                const aux = page + 1;
                setPage(aux);
                if (page == lastPage-1) {
                  setVisible(false);
                }
              }}
            />
          )
        }
        contentContainerStyle={{ gap: 30, paddingBottom: "60%" }}
      />
    </SafeAreaView>
  );
}

export default Clients;
