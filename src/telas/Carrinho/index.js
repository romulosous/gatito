import React from "react";
import { FlatList, Text, View } from "react-native";

import Item from "./Item";
import StatusCarrinho from "../../componentes/StatusCarrinho";

import { useSelector } from "react-redux";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DE BANHO NO SEU GATO!",
    quantidade: 1
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas. ",
    quantidade: 2
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    quantidade: 1
  },

]

export default function Carrinho() {
  const carrinho = useSelector((state) => state.carrinho.itens)
  const total = carrinho.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade), 0)
  if (carrinho.length) {
    return <>
      <StatusCarrinho total={total} />
      <FlatList
        data={carrinho}
        renderItem={({ item, index }) => <Item {...item} index={index} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  } else {
    return <>
      <StatusCarrinho total={total} />
      <Text style={{ fontSize: 22 }} if={total < 1}>Carrinho está vazio. Vamos gastar um pouquinho!!</Text>
    </>
  }
}