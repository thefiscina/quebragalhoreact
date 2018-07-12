import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Switch } from 'react-router-native'
import ListaQuebraGalho from '../views/Oferta/ListaQuebraGalho'  
import VisualizarItem from '../views/Oferta/VisualizarItem'
import CriarUsuario from '../views/Usuario/CriarUsuario'
import EditarUsuario from '../views/Usuario/EditarUsuario'
import CriarOferta from '../views/Oferta/CriarOferta'
import EditarOferta from '../views/Oferta/EditarOferta'


export default () => (
  <NativeRouter>
    <View style={{ flex: 1 }}>
      <Switch>
        <Route path='/cadastroUsuario' component={CriarUsuario} />
        <Route path='/criarOferta' component={CriarOferta} />
        <Route path='/:ofertaId' component={VisualizarItem} />
        {/* <Route path='/:pageId' component={EditarUsuario} /> */}
        <Route component={ListaQuebraGalho} />
      </Switch>
    </View>
  </NativeRouter>
)
