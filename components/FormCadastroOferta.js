import React from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
export default class FormCadastroOferta extends React.Component {


    constructor(props) {
        super(props)
        this.state = { date: '2018-06-13' }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar goBack={() => this.props.history.push('/')} />
                <Text>Cadastro Oferta</Text>
                <View >
                    <FormLabel>Nome da Oferta</FormLabel>
                    <FormInput />
                    <FormValidationMessage>Error message</FormValidationMessage>
                </View>

                <View >
                    <FormLabel>Tipo de oferta</FormLabel>
                    <Picker>
                        <Picker.Item label='Baixa' value='BAIXA' />
                        <Picker.Item label='Media' value='MEDIA' />
                        <Picker.Item label='Alta' value='ALTA' />
                    </Picker>
                </View>

                <View >
                    <FormLabel>Validade da oferta</FormLabel>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
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
                        onDateChange={(date) => { this.setState({ date: date }) }}
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
        flex: 1,
        marginTop: 60,
        paddingLeft: 20,
        paddingRight: 20
    }
});