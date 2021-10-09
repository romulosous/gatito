import React, { useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";

import estilosGlobal from '../../estilos'

import Item from "./Item";
import TelaPadrao from "../../componentes/TelaPadrao";

import api from "../../services/api";



const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DE BANHO NO SEU GATO!"
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas. "
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
  },

]

export default function Servicos() {
  // const [services, setServices] = useState([])

  // useEffect(() => {

  //   async function loadServices() {
  //     try {
  //       const response = await api.get("/servicos");
  //       setServices(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   loadServices();
  // }, []);



  return <>
    <FlatList
      data={servicos}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  </>
}