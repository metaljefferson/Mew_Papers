import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ApiService {
  // Recebe um objeto de dados
  async create(data) {
    try {
      const id = uuid.v4();
      await AsyncStorage.setItem(`${id}`, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  // Devolve a lista de itens
  async getAll() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);

      if (items === null) throw new Error("Nenhum resultado encontrado");

      // console.warn(JSON)
      return items;
    } catch (error) {
      console.error(error);
    }
  }

  async editItem(itemId, data) {
    try {
      const existingItem = await AsyncStorage.getItem(itemId);

      if (existingItem) {
        const existingData = JSON.parse(existingItem);

        const updatedData = { ...existingData, ...data };

        await AsyncStorage.setItem(itemId, JSON.stringify(updatedData));

        return updatedData;
      } else {
        throw new Error("Item não encontrado");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteItem(itemId) {
    try {
      await AsyncStorage.removeItem(itemId);
    } catch (error) {
      console.error(error);
    }
  }
}
