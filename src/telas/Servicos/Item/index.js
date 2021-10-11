import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Botao from "../../../componentes/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro";

import estilos from "./estilos";

import { useDispatch } from "react-redux";
import { actions } from "../../../Store/Carrinho";

export default function Item({ id, nome, preco, descricao }) {
  const dispatch = useDispatch();

  const [quantidade, setQuantidade] = useState(1)
  const [total, setTotal] = useState(preco)
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade)
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  }

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  }

  const adicionaNoCarrinho = () => {
    dispatch(actions.adicionar({ id, nome, preco, descricao, quantidade }))
  }

  return <>
    <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.descricao}>{descricao}</Text>
      <Text style={estilos.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(preco)
      }</Text>
    </TouchableOpacity>

    {expandir && <View style={estilos.carrinho}>
      <View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Quantidade:</Text>
          <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
        </View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Total:</Text>
          <Text style={estilos.preco}>{
            Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(total)
          }</Text>
        </View>
      </View>
      <Botao valor="Adicionar ao Carrinho" acao={adicionaNoCarrinho} />
    </View>}
    <View style={estilos.divisor} />
  </>
}