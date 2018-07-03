import React from 'react'
import { StyleSheet, ScrollView, View, Text, PixelRatio, Alert, Button } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

export default class ListaQuebraGalho extends React.Component {

    state = {
        Usuarios: []
    }

    componentDidMount() {
        fetch('https://crudapiteste.herokuapp.com/api/v1/users')
            .then(T => T.json())
            .then(Usuarios => this.setState({ Usuarios }))
            .catch(() => Alert.alert('Erro', 'Não foi possivel recuperar os pacotes'))
    }

    onDelete(id) {
        console.log(id)
        Alert.alert(
            'Exclusão de Usuario',
            'Você confirma a exclusão deste Usuario?',
            [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim',
                    onPress: () => {
                        fetch(`https://crudapiteste.herokuapp.com/api/v1/users/${id}`, { method: 'DELETE' })
                            .then(T => T.json())
                            .then(() => this.setState({ Usuarios: this.state.Usuarios.filter(T => T._id !== id) }))
                    }
                }
            ])
    }

    verificarDados(Listausuario) {
        if (Listausuario != null && Listausuario.length > 0) {
            try {
                return (
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            Listausuario.map((item, i) => (
                                <View key={i} style={{ flex: 0.1, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ flex: 0.6 }}>{item.name}</Text>
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
        var Listausuario = this.state.Usuarios.result != null ? this.state.Usuarios.result : null;
        return (
            <View style={styles.container}>
                <NavigationBar />
                <View >
                    <Button title='Adicionar Usuario' onPress={() => this.props.history.push('/cadastroUsuario')} />
                </View>
                <ScrollView style={styles.content}>
                    {this.verificarDados(Listausuario)}
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