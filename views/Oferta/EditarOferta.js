import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import FormCadastroOferta from '../../components/FormCadastroOferta'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

import qs from 'querystring'

export default class EditarOferta extends Component {
    state = {
        Oferta: undefined
    }

    onSave(data) {
        const ofertaId = this.props.match.params.ofertaId

        const options = {
            method: 'PUT',
            body: qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        fetch(`https://crudapiteste.herokuapp.com/api/v1/oferta/${ofertaId}`, options)
            .then(T => T.json())
            .then(() => Alert.alert('editar', 'oferta editada'))
        // .then(() => this.props.history.push('/'))
    }

    componentDidMount() {
        const ofertaId = this.props.match.params.ofertaId

        fetch(`https://crudapiteste.herokuapp.com/api/v1/oferta/${ofertaId}`, { method: 'GET' })
            .then(T => T.json())
            .then(Oferta => this.setState({ Oferta }))
    }

    render() {
        const { Oferta } = this.state

        return (
            <View style={styles.container}>
                <NavigationBar goBack={() => this.props.history.push('/')} />
                <Text>Editar Oferta</Text>
                {!Oferta && (
                    <Text>Não ha nenhuma Oferta</Text>
                )}
                {Oferta && (
                    <FormCadastroOferta
                        value={Oferta}
                        onSave={this.onSave.bind(this)}
                        onCancel={() => this.props.history.push('/')}
                    />
                )}
                <View style={{ flex: 0.1 }}>
                    <Footer />
                </View>
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