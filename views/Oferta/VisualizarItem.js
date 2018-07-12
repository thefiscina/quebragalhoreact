import React from 'react'
import { StyleSheet, View, ScrollView, Text, ImageBackground, PixelRatio, Linking, Alert } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'


export default class VisualizarItem extends React.Component {

    state = {
        Oferta: {}
    }

    componentDidMount() {
        const ofertaId = this.props.match.params.ofertaId
        console.log(ofertaId)
        fetch(`https://crudapiteste.herokuapp.com/api/v1/oferta/${ofertaId}`, { method: 'GET' })
            .then(T => T.json())
            .then(Oferta => this.setState({ Oferta }))
            .catch(() => Alert.alert('Erro', 'Não foi possivel recuperar os pacotes'))
    }

    verificarDados(Oferta) {
        if (Oferta != null) {
            try {
                return (

                    <Card
                        title={Oferta.nome}
                        image={null}>
                        <Text style={{ marginBottom: 10 }}>
                            {Oferta.descricao}
                    </Text>
                        <Button
                            icon={{ name: 'send' }}
                            backgroundColor='#03A9F4'                            
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Aceitar Proposta' />
                    </Card>

                );
            } catch (ex) {
                return (<Text>Erro ao exibir dados</Text>);
            }
        } else {
            return (
                <Text>Sem dados para exibir</Text>
            );
        }
    }


    render() {
        var ofertaSelecionada = this.state.Oferta.result != null ? this.state.Oferta.result : null;    
        if (!ofertaSelecionada) {
            console.log(ofertaSelecionada)
            return (
                <View style={styles.container}>
                    <NavigationBar goBack={() => this.props.history.push('/')} />
                </View>
            )
        } else {
            console.log(ofertaSelecionada)
        }

        return (
            <View style={styles.container}>
                <NavigationBar goBack={() => this.props.history.push('/')} />
                <ScrollView style={styles.content}>
                    {this.verificarDados(ofertaSelecionada)}
                </ScrollView>
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
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 16 / PixelRatio.getFontScale(),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textos: {
        textAlign: 'center'
    }
})
