import React from 'react'
import { StyleSheet, View, ScrollView, Text, ImageBackground, PixelRatio, Linking, Alert } from 'react-native'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'


export default class VisualizarItem extends React.Component {  
    
    state = {
        data: undefined
    }

    componentDidMount() {
        const { Item } = this.props.match.params
        console.log(JSON.parse(Item));
        var data = JSON.parse(Item);
        this.setState({ data });
    }

    render() {
        const { data } = this.state
        if (!data) {
            console.log(data)
            return (
                <View style={styles.container}>
                    <NavigationBar goBack={() => this.props.history.push('/')} />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <NavigationBar goBack={() => this.props.history.push('/')} />
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>{data.name.toUpperCase()}</Text>
                    </View>
                    <View style={styles.subcontent}>
                        <Text style={styles.textos}>{data.email.toUpperCase()}</Text>
                    </View>
                    <View style={styles.subcontent}>
                        <Text style={styles.textos}>{data.password.toUpperCase()}</Text>
                    </View>
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
        backgroundColor: '#224AD0'
    },
    content: {
        backgroundColor: '#2190d0',
        flex: 1
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
