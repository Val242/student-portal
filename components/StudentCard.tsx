import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import React from 'react'
import { Image, Text, View } from 'react-native'
import student from '../assets/images/Rajeev.png'
import { ProfileButton } from './Button'

export default function StudentCard() {
     const profileStyles = createProfilesStyles()
  return (
       <View style= {profileStyles.profileLayout}>
              <View style={{display:'flex', flexDirection: 'row' }}>
                  <Image
                  source={student}
                  style={{ width: 120, height: 120, resizeMode: "contain", borderRadius:20 }}
                  />
                  <View style={{display:'flex' , marginLeft:10, justifyContent:"center"}}>
                    <Text style={{fontSize: 25,fontWeight: "700",letterSpacing: -1}}>Kate Malone</Text>
                    <Text>Class 9A</Text>
                  </View>
              </View>
              <View style= {profileStyles.filters}>
                <ProfileButton section={'Achievements'}  />
                <ProfileButton section={'Notes'}  />
              </View>
          </View>
  )
}