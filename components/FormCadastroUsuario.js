import React from 'react'
import { StyleSheet, Button, View, Text, TextInput, Picker } from 'react-native'
import DatePicker from 'react-native-datepicker'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default class FormCadastroUsuario extends React.Component {
    state = this.props.value || {
        name: '',
        email: '',
        password: ''
    }

  
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.value) {
            this.setState(nextProps.value)
        }
    }


    render() { 
        return (
            <View style={styles.container}>                
                <View>
                    <Text>Nome usuario</Text>
                    <TextInput
                        placeholder='digite o nome do usuario'
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput
                        placeholder='insira o email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput
                        placeholder='Insira sua senha'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>

                <View > 
                    <Button style={styles.btnContainer} title='Salvar' disabled={this.state.name === ''} onPress={() => this.props.onSave(this.state)} />
                    <Button style={styles.btnContainer} title='Cancelar' onPress={this.props.onCancel} />
                </View>              
            </View>
        ) 
    }  

}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    btnContainer:{
        margin:10,
        paddingTop:10  
    }
});