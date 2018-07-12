import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert, ScrollView } from 'react-native'
import FormCadastroOferta from '../../components/FormCadastroOferta'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

import qs from 'querystring'

export default class EditarOferta extends Component {
    state = {
        Oferta: null
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
        console.log(ofertaId)
        fetch(`https://crudapiteste.herokuapp.com/api/v1/oferta/${ofertaId}`, { method: 'GET' })
            .then(T => T.json())
            .then(Oferta => this.setState({ Oferta }))
    }


    verificarDados(Oferta) {        
        if (Oferta != null) {
            var oferta = Oferta;
            console.log("Oferta: " + oferta)
            // if (Oferta.result != null) {
            //     console.log("resultado " +  Oferta.result) 
                // try {
                //     return (
                //         <FormCadastroOferta
                //             value={Oferta}
                //             onSave={this.onSave.bind(this)}
                //             onCancel={() => this.props.history.push('/')}
                //         />
                //     );
                // } catch (ex) {
                //     return (<Text>Erro ao exibir dados</Text>);
                // } 
            // }
        } else {
            return (
                <Text>Sem dados para exibir</Text>
            );
        }
    }

    render() {
        // const { Oferta } = this.state
        //var Oferta = this.state.Oferta != null ? this.state.Oferta.Object : null;
        return (
            <View style={styles.container}>
                <NavigationBar goBack={() => this.props.history.push('/')} />
                <ScrollView style={styles.content}>
                    { 
                        this.verificarDados( this.state.Oferta != null? JSON.stringify(this.state.Oferta) : null)}
                </ScrollView>
                {/* <ScrollView style={styles.content}>                    
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
                </ScrollView> */}
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
    },
    content: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    }
})