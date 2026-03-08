import React from 'react'
import { Text, View } from 'react-native'

export default function About() {
  return (
          <View style={{marginVertical:15}}>
                 <Text style = {{fontSize: 20,fontWeight: "600",letterSpacing: -1,}}>
                        About
                 </Text>
                 <Text style = {{fontSize: 15}}>
                        I am interested in math and biology. I like to solve
                        complex problems and participate in school olympiads
                </Text>
           </View>
  )
}