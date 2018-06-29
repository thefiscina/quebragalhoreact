import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { DefaultTheme, Toolbar, ToolbarBackAction, ToolbarContent } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#224AD0',
    accent: '#f1c40f'
  }
}

export default class NavigationBar extends Component {
  componentDidMount () {
    StatusBar.setBarStyle('light-content')
  }

  render () {
    const { goBack } = this.props

    return (
      <Toolbar theme={theme}>
        {goBack && (
          <ToolbarBackAction onPress={goBack} />
        )}
        <ToolbarContent title='Qubra Galho' />
      </Toolbar>
    )
  }
}
