import React from "react"
import { TextInput } from "react-native"
import estilosPadrao from './estilos'

export default function CampoInteiro({ valor, estilos, acao }) {
  const atualizar = (novoValor, acaoRetorno) => {
    const verificarInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificarInteiro) return;

    const removerZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
    acaoRetorno(removerZeroEsquerda);
  }
  const numeroEmTexto = String(valor)
  return <TextInput
    style={[estilosPadrao.campo, estilos]}
    keyboardType="number-pad"
    selectTextOnFocus
    onChangeText={(novoValor) => { atualizar(novoValor, acao) }}
    value={numeroEmTexto}
  />
}