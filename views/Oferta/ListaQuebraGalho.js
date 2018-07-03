import React from 'react'
import { StyleSheet, ScrollView, View, Text, PixelRatio, Alert, Button } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

export default class ListaQuebraGalho extends React.Component {

    state = {
        Ofertas: []
    }

    componentDidMount() {
        fetch('https://crudapiteste.herokuapp.com/api/v1/oferta')
            .then(T => T.json())
            .then(Ofertas => this.setState({ Ofertas }))
            .catch(() => Alert.alert('Erro', 'Não foi possivel recuperar os pacotes'))
    }

    onDelete(id) {
        console.log(id)
        Alert.alert(
            'Exclusão de Usuario',
            'Você confirma a exclusão desta Oferta?',
            [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim',
                    onPress: () => {
                        fetch(`https://crudapiteste.herokuapp.com/api/v1/oferta/${id}`, { method: 'DELETE' })
                            .then(T => T.json())
                            .then(() => this.setState({ Ofertas: this.state.Ofertas.filter(T => T._id !== id) }))
                    }
                }
            ])
    }

    verificarDados(ListaOferta) {
        if (ListaOferta != null && ListaOferta.length > 0) {
            try {
                return (
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            ListaOferta.map((item, i) => (
                                <View key={i} style={{ flex: 0.1, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ flex: 0.6 }}>{item.nome}</Text>
                                    <Text style={{ flex: 0.6 }}>{item.descricao}</Text>
                                    <Button style={{ flex: 0.2 }} title='Editar' onPress={() => this.props.history.push('/' + item._id)} />
                                    <Button style={{ flex: 0.2 }} title='Excluir' onPress={() => this.onDelete(item._id)} />
                                </View>
                            ))
                        }
                    </List>
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
        var ListaOferta = this.state.Ofertas.result != null ? this.state.Ofertas.result : null;
        return (
            <View style={styles.container}>
                <NavigationBar />
                <View >
                    <Button title='Adicionar Oferta' onPress={() => this.props.history.push('/criarOferta')} />
                </View>
                <ScrollView style={styles.content}>
                    {this.verificarDados(ListaOferta)}
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
    }
})