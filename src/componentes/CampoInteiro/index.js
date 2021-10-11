import React from "react"
import { TextInput,TouchableOpacity, Text , StyleSheet} from "react-native"
import estilosPadrao from './estilos'

export default function CampoInteiro({ valor, estilos, acao }) {
  const atualizar = (novoValor, acaoRetorno) => {
    // const verificarInteiro = novoValor.match(/^[0-9]*$/);
    // if (!verificarInteiro) return;

    // const removerZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
    acaoRetorno(novoValor);
  }
  const numeroEmTexto = String(valor)
  return <>
  <TouchableOpacity>
    <Text
    style={[stylesButton.button, stylesButton.text]}
    onPress={() => atualizar(--valor, acao)}
    >-</Text>
  </TouchableOpacity>
  
  <Text style={[estilosPadrao.campo, estilos]}>{valor}</Text>
  <TouchableOpacity>
<Text style={[stylesButton.button, stylesButton.text]} onPress={() => atualizar(++valor, acao)} >+</Text>
  </TouchableOpacity>
  </>
}



const stylesButton = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: '#A050BE',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});