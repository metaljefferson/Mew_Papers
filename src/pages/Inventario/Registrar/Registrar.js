import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, Alert } from "react-native";

import { ApiService } from "../../../service/ApiService";

import { Button } from "@rneui/themed";
import { styles } from ".";

export function Registrar() {
  const api = new ApiService();

  const [nomeItem, setNomeItem] = React.useState("");
  const [quantidadeItem, setQuantidadeItem] = React.useState("0");
  const [descricaoItem, setDescricaoItem] = React.useState("");

  const clearInputs = () => {
    setNomeItem("");
    setQuantidadeItem("");
    setDescricaoItem("");
  };

  const onSubmit = async () => {
    if (!validateField()) return;

    await api.create({
      nomeItem,
      quantidadeItem,
      descricaoItem,
    });

    clearInputs();

    Alert.alert("Sucesso", "Registro realizado com sucesso!", [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  };

  const validateField = () => {
    if (nomeItem === "") {
      Alert.alert("Nome do Item", "O nome deve ser preenchido");
      return false;
    }

    if (quantidadeItem === 0 || quantidadeItem === "") {
      Alert.alert("Quantidade", "A quantidade deve ser preenchida.");
      return false;
    }

    if (descricaoItem === "") {
      Alert.alert("Descrição", "A descrição deve ser preenchida.");
      return false;
    }

    return true;
  };

  const getItem = async () => {
    const api = new ApiService();
    const response = await api.getAll();

    Alert.alert("Alert Title", `${response}`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
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
        name="nomeItem"
        style={styles.input}
        onChangeText={setNomeItem}
        value={nomeItem}
      />

      <Text style={styles.text}>Quantidade</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          if (text !== "") {
            setQuantidadeItem(text);
          } else {
            setQuantidadeItem("0");
          }
        }}
        keyboardType="numeric"
        defaultValue={quantidadeItem}
      />

      <Text style={styles.text}>Descrição</Text>

      <View>
        <TextInput
          editable
          multiline
          numberOfLines={6}
          maxLength={200}
          onChangeText={(text) => setDescricaoItem(text)}
          value={descricaoItem}
          style={styles.description}
        />
      </View>

      <Button
        buttonStyle={styles.button}
        title="Enviar"
        onPress={() => onSubmit()}
        color="green"
      />
    </SafeAreaView>
  );
}
