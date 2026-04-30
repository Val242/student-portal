import { ROUTES } from '@/constants/navigation'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Notes = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Notes</Text>
                       <TouchableOpacity onPress={() => router.replace(ROUTES.PROFILE)}>
                       <Text style= {{color:'#a28ef9', fontWeight:'bold'}}>
                         Go to Profiles Tab</Text>
                         </TouchableOpacity>
          </View>

  )
}

export default Notes