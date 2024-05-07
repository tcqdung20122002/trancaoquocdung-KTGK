import React, { useEffect } from 'react'
import { MyConTextControllerProvider } from './store'

import { NavigationContainer } from '@react-navigation/native'
import Router from './screen/router'

const App = () => {
  return (
    <MyConTextControllerProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    
    </MyConTextControllerProvider>
  )
}

export default App