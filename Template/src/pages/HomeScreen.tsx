import React from 'react'
import { View } from 'react-native'
import { TextInput, Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Icon name='home' />
      <TextInput></TextInput>
    </View>
  )
}
