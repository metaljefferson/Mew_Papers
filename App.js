import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/pages/Home/Home";
import { Registrar } from "./src/pages/Inventario/Registrar/Registrar";
import { Listagem } from "./src/pages/Inventario/Listar/Listagem";
import { AtualizarItem } from "./src/pages/Inventario/Atualizar/Atualizar";
import { AppProvider } from "./src/context/app-provider";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: styles.header,
          title: "Mew Papers",
        }}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: styles.header,
        }}
        name="Registrar"
        component={Registrar}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: styles.header,
        }}
        name="Listar"
        component={Listagem}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: styles.header,
        }}
        name="Atualizar"
        component={AtualizarItem}
      />
    </Stack.Navigator>
  );
}

const App = () => (
  <AppProvider>
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  </AppProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  header: {
    color: "green",
    fontWeight: "bold",
  },
});

export default App;
