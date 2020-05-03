import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../pages/HomeScreen'

const Stack = createStackNavigator()

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  )
}
