import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../docs/url_requisition";
import api from "./api";

export async function getClients(search, page) {
    const token = await AsyncStorage.getItem('token')
    try{
        const response = await api.get(url.VIST, {
            params: {
              search: search,
              page : page,
              per_page:3
            },
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          return response
    }catch (err) {
        throw(err)
  }
}