import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react/native'

@inject('userStore')
@observer
export default class UserScreen extends Component {
  static propTypes = {
    userStore: PropTypes.object,
    navigation: PropTypes.object
  }

  render () {
    const { userStore } = this.props
    return (
      <View style={{marginTop: 100}}>
        <Text>Users count: {userStore.count}</Text>
        <Button onPress={() => userStore.onPlus()} title="Plus" />
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Go Back" />
      </View>
    )
  }
}
