import { createAuthStyles } from '@/assets/styles/auth.styles'
import { ROUTES } from '@/constants/navigation'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
    const authStyles = createAuthStyles()
  return (
    <SafeAreaView style= {authStyles.container}>
      <Text style={authStyles.header}>login Valentine</Text>
                <TouchableOpacity onPress={() => router.replace(ROUTES.SIGNUP)}>
            <Text >Sign Up</Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default login