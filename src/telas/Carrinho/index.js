import React from "react";
import { FlatList, Text, View } from "react-native";

import Item from "./Item";
import StatusCarrinho from "../../componentes/StatusCarrinho";

import { useSelector } from "react-redux";


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