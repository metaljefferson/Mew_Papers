import React, { useState }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,

} from 'react-native';

import { SpeedDial } from '@rneui/themed';


export default function Home({navigation}) {
  const [open, setOpen] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
        "Registre aqui seus itens!"
        </Text>
       
        <TouchableOpacity
          activeOpacity={0.7}

          style={styles.touchableOpacityStyle}>


        </TouchableOpacity>

        <SpeedDial
          transitionDuration={150}
          backdropPressableProps={{ opacity: 0 }}
          isOpen={open}
          icon={{ name: 'edit', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
          buttonStyle={{ backgroundColor: 'green' }}
        >
          <SpeedDial.Action
            icon={{ name: 'add', color: '#fff' }}
            title="Registrar"
            onPress={() => navigation.navigate('Registrar')}
            buttonStyle={{ backgroundColor: 'green' }}
          />
          <SpeedDial.Action
            icon={{ name: 'list', color: '#fff' }}
            title="Listagem"
            onPress={() => navigation.navigate('Listar')}
            buttonStyle={{ backgroundColor: 'green' }}
          />
        </SpeedDial>         

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'green'
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },

  speedDialOpacity1: {
    opacity: 0,
  },
  speedDialOpacity2: {
    opacity: .7,
  },


  // Estilos do modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  textColorClose: {
    color: 'white',
  },
  
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});