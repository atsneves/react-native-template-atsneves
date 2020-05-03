import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MoreScreen } from '../pages/MoreScreen'

const Stack = createStackNavigator()

export const MoreStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='More'>
      <Stack.Screen
        name='More'
        component={MoreScreen}
        options={{ title: 'Mais Informações' }}
      />
    </Stack.Navigator>
  )
}
