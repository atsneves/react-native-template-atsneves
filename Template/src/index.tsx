import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { TabNav } from '~/tabs'

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <TabNav />
      </PaperProvider>
    </NavigationContainer>
  )
}
