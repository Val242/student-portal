import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import React from 'react'
import { Image, Text, View } from 'react-native'

export default function StudentCard() {
     const profileStyles = createProfilesStyles()
  return (
              <View style={{display:'flex', flexDirection: 'row', paddingTop: 10 }}>
                  <Image source={require("../assets/images/Rajeev.png")}
                  style={{ width: 120, height: 120, resizeMode: "contain", borderRadius:25 }}
                  />
                  <View style={{display:'flex' , marginLeft:10, justifyContent:"center"}}>
                    <Text style={{fontSize: 25,fontWeight: "700",letterSpacing: -1}}>Kate Malone</Text>
                    <Text>Class 9A</Text>
                  </View>
              </View>
  )
}