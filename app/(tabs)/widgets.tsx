import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const widgets = () => {
  return (
    <SafeAreaView>
      <Text style={{textAlign:"center", fontWeight: "700", fontSize:30}}>Widgets</Text>
    </SafeAreaView>
  )
}

export default widgets