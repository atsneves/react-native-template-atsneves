import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { HomeStack } from '~/routes/HomeStack'
import { MoreStack } from '~/routes/MoreStack'
import { RadioStack } from '~/routes/RadioStack'

const Tab = createMaterialBottomTabNavigator()

export const TabNav: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#FFFFFF'
      inactiveColor='#CCC'
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='notebook' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Radio'
        component={RadioStack}
        options={{
          tabBarLabel: 'Second',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='radio' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='More'
        component={MoreStack}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='more' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
