import React, { useEffect, useState } from 'react';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Rotas from './src/Rotas';
import TelaPadrao from './src/componentes/TelaPadrao';
import { store } from './src/Store';

import { Provider } from "react-redux"


export default function App() {
  return (
    <Provider store={store}>
      <TelaPadrao>
        <Rotas />
      </TelaPadrao>
    </Provider>
  )
}
