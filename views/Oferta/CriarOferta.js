import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FormCadastroOferta from '../../components/FormCadastroOferta'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

import qs from 'querystring'
 

export default class CriarOferta extends Component {
    onSave (data) {
      fetch('https://crudapiteste.herokuapp.com/api/v1/oferta', {
        method: 'POST',
        body: qs.stringify(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(T => T.json())
        .then(() => this.props.history.push('/'))
    }
   
    render () {
      return (
        <View style={styles.container}>
          <Text>Cadastrar Oferta</Text>
          <FormCadastroOferta
            onSave={this.onSave.bind(this)}
            onCancel={() => this.props.history.push('/')}
          />
        </View>
      )
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })