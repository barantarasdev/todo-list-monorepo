import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import BackgroundWrapper from './components/Container'
import AppNavigator from './navigation'
import StoreProvider from './store/StoreProvider'

export default function App() {
  return (
    <StoreProvider>
      <StatusBar style="light" />
      <BackgroundWrapper>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </BackgroundWrapper>
    </StoreProvider>
  )
}
