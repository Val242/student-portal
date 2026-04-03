import { createAuthStyles } from '@/assets/styles/auth.styles'
import { ROUTES } from '@/constants/navigation'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signup = () => {
      const authStyles = createAuthStyles()
  return (
    <SafeAreaView style= {authStyles.container}>
      <Text style={authStyles.header}>SignUp Valentine</Text>
       <TouchableOpacity onPress={() => router.replace(ROUTES.LOGIN)}>
            <Text >Login</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => router.replace(ROUTES.FORGOT_PASSWORD)}>
            <Text >forgot password</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default signup