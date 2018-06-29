import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FormCadastroUsuario from '../components/FormCadastroUsuario'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import qs from 'querystring'

export default class CriarUsuario extends Component {
  onSave(data) {
    console.log(data)
    try {
      fetch('https://crudapiteste.herokuapp.com/api/v1/users', {
        method: 'POST',
        body: qs.stringify(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(T => T.json())
        .then(() => this.props.history.push('/'))
    } catch (err) {
      console.log("erro ao tentar gravar usuario")
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <NavigationBar goBack={() => this.props.history.push('/')} />
        <View style={styles.textTitle}><Text>Cadastrar um usuário</Text></View>
        <View style={styles.content}>
          <FormCadastroUsuario
            onSave={this.onSave.bind(this)}
            onCancel={() => this.props.history.push('/')}
          />
        </View>
        <View style={{ flex: 0.1 }}>
          <Footer />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  textTitle: {
    margin: 10,
  }
})