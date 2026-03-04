import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const ProfilesTop = () => {
    const profileStyles = createProfilesStyles()
  return (
    
          <View style = {profileStyles.page}>
             <View style = {profileStyles.topNav}>
               <Text style = {profileStyles.title}>My profile</Text>
                <View style = {profileStyles.InnerTopNav}>
                    <MaterialCommunityIcons name="lead-pencil" size={30} color="black" />
                    <Ionicons name='notifications-outline' size={30}/>
                  </View>
              </View>
    </View>
  )
}

export default ProfilesTop