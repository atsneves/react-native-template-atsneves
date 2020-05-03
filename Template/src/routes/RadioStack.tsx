import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RadioScreen from '~/pages/RadioScreen'

const Stack = createStackNavigator()

export const RadioStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Radio'>
      <Stack.Screen
        name='Radio'
        component={RadioScreen}
        options={{ title: 'Rádio' }}
      />
    </Stack.Navigator>
  )
}
