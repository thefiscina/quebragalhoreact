import React from 'react'
import { View, Text, Picker, StyleSheet , TextInput} from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
export default class FormCadastroOferta extends React.Component {

    state = this.props.value || {
        nome: '',
        descricao: '',
        tempoOferta: { tempoOferta: '2018-06-13' },
        endereco: ''
    }
  
    componentWillReceiveProps(nextProps) {
        if (nextProps.value) {
            this.setState(nextProps.value)
        }
    }

    render() {
        return (
            <View style={styles.container}>        
              <View style={styles.tituloContainer}>Oferta</View>                            
                <View>
                    <Text>Nome da oferta</Text>
                    <TextInput
                        placeholder='Digite o nome da oferta'
                        value={this.state.nome}
                        onChangeText={nome => this.setState({ nome })}
                    />
                </View>

                <View>
                    <Text>Descricao da oferta</Text>
                    <TextInput
                        placeholder='Descreva sua oferta'
                        value={this.state.descricao}
                        onChangeText={descricao => this.setState({ descricao })}
                    />
                </View>

                <View >
                    <FormLabel>Validade da oferta</FormLabel>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.tempoOferta}
                        mode="date"
                        placeholder="selecione da data"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ tempoOferta: date }) }}
                    />
                </View>

                 <View>
                    <Text>Endereço</Text>
                    <TextInput
                        placeholder='Insira o endereço'
                        value={this.state.endereco}
                        onChangeText={endereco => this.setState({ endereco })}
                    />
                </View>  

                  <View > 
                    <Button style={styles.btnContainer} title='Salvar' disabled={this.state.nome === ''} onPress={() => this.props.onSave(this.state)} />
                    <Button style={styles.btnContainer} title='Cancelar' onPress={this.props.onCancel} />
                </View>              
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1      
    },
    btnContainer:{
        margin:10,
        paddingTop:10  
    },
    tituloContainer:{
        margin:10,
        paddingTop:10  
    }
});