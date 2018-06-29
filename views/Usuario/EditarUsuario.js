import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import FormCadastroUsuario from '../components/FormCadastroUsuario'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import qs from 'querystring'

export default class EditarUsuario extends Component {
  state = {
    usuario: undefined
  }

  onSave(data) {
    const pageId = this.props.match.params.pageId

    const options = {
      method: 'PUT',
      body: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    fetch(`https://crudapiteste.herokuapp.com/api/v1/users/${pageId}`, options)
      .then(T => T.json())
      .then(() => Alert.alert('editar', 'usuario editado'))
    // .then(() => this.props.history.push('/'))
  }

  componentDidMount() {
    const pageId = this.props.match.params.pageId
    console.log(this.props.match.params.pageId);
    fetch(`https://crudapiteste.herokuapp.com/api/v1/users/${pageId}`, { method: 'GET' })
      .then(T => T.json())
      .then(usuario => this.setState({ usuario }))
  }

  render() {
    const { usuario } = this.state

    return (
      <View style={styles.container}>
        <NavigationBar goBack={() => this.props.history.push('/')} />
        <View style={styles.textTitle}><Text>Editar um usuário</Text></View>
        <View style={styles.content}>          
          {!usuario && (
            <Text>Não ha nenhum Usuario</Text>
          )}
          {
            console.log(usuario)
          }
          {            
            usuario!= null && (
            <FormCadastroUsuario
              value={usuario}
              onSave={this.onSave.bind(this)}
              onCancel={() => this.props.history.push('/')}
            />
          )}
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
    paddingLeft: 20,
    paddingRight: 20
  },
  textTitle: {
    margin: 10,
  }
})    