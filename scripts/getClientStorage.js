import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getClientStorage() {
  try {
    const response = await AsyncStorage.getItem("client");
    return JSON.parse(response);
  } catch (error) {
    throw error;
  }
}
