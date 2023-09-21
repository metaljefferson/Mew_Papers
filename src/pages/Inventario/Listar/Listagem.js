import {  useContext } from "react";
import { ListItem, Icon } from "@rneui/themed";
import { ApiService } from "../../../service/ApiService";
import { SafeAreaView, ScrollView, Alert } from "react-native";
import AppContext from "../../../context/app-provider";

export function Listagem({ navigation }) {
  const { items, setItems } = useContext(AppContext);

  const deleteItemById = async (id) => {
    const api = new ApiService();
    try {
      const itemToDelete = JSON.parse(items.find((item) => item[0] === id)[1]);
      const quantidadeEmEstoque = itemToDelete.quantidadeItem;

      if (quantidadeEmEstoque > 0) {
        Alert.alert(
          "Erro",
          "Este item não pode ser excluído, pois ainda existem unidades em estoque."
        );
      } else {
        await api.deleteItem(id);

        const updatedItems = items.filter((item) => item[0] !== id);
        setItems(updatedItems);

        Alert.alert("Sucesso", "Item excluído com sucesso!");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        {items.map((item, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={{ fontSize: 20, fontWeight: "bold" }}>
                {item && JSON.parse(item[1]) && JSON.parse(item[1]).nomeItem}
              </ListItem.Title>
              <ListItem.Subtitle>
                Quantidade:{" "}
                {item &&
                  JSON.parse(item[1]) &&
                  JSON.parse(item[1]).quantidadeItem}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                Descrição:{" "}
                {item &&
                  JSON.parse(item[1]) &&
                  JSON.parse(item[1]).descricaoItem}
              </ListItem.Subtitle>
            </ListItem.Content>

            <Icon
              onPress={() =>
                navigation.navigate("Atualizar", {
                  id: item[0],
                  item: JSON.parse(item[1]),
                })
              }
              name="edit"
              type="font-awesome5"
              color="green"
              size={28}
            />

            <Icon
              name="close"
              type="font-awesome5"
              color="green"
              size={28}
              onPress={() => deleteItemById(item[0])}
            />
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
