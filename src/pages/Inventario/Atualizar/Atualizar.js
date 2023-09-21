import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";

import { Button } from "@rneui/themed";
import { ApiService } from "../../../service/ApiService";

export function AtualizarItem({ navigation, route }) {
  const api = new ApiService();

  const [itemNome, setItemNome] = useState("");
  const [itemQuantidade, setItemQuantidade] = useState("0");
  const [itemDescricao, setItemDescricao] = useState("");

  const {
    id,
    item: { nomeItem, quantidadeItem, descricaoItem },
  } = route.params;

  useEffect(() => {
    setItemNome(nomeItem);
    setItemQuantidade(quantidadeItem);
    setItemDescricao(descricaoItem);
  }, []);

  const onUpdateItem = async () => {
    if (itemNome.trim() === "") {
      Alert.alert("Erro", "O campo Nome do item não pode estar vazio.");
      return;
    }

    try {
      const response = await api.editItem(id, {
        nomeItem: itemNome,
        quantidadeItem: itemQuantidade,
        descricaoItem: itemDescricao,
      });

      Alert.alert("Sucesso", "Item atualizado com sucesso!", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Listar");
          },
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 20,
      }}
    >
      <Text style={styles.text}>Nome do item</Text>
      <TextInput
        name="itemNome"
        style={styles.input}
        onChangeText={setItemNome}
        value={itemNome}
        editable={false} // Desabilita a edição do campo
      />

      <Text style={styles.text}>Quantidade</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setItemQuantidade(text)}
        keyboardType="numeric"
        value={itemQuantidade}
      />

      <Text style={styles.text}>Descrição</Text>
      <View>
        <TextInput
          editable
          multiline
          numberOfLines={6}
          maxLength={200}
          onChangeText={(text) => setItemDescricao(text)}
          value={itemDescricao}
          style={styles.description}
        />
      </View>

      <Button
        buttonStyle={styles.button}
        title="Atualizar"
        onPress={() => onUpdateItem()}
        color="green"
      />
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: "#A9A9A9",
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    borderRadius: 5,
    marginTop: 30,
    height: 60,
    color: "green",
  },
  text: {
    marginBottom: 8,
  },
  description: {
    borderColor: "#A9A9A9",
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
