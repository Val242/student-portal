import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import { ProfileButton } from '@/components/Button'
import About from '@/components/profile/About'
import Activities from '@/components/profile/Activities'
import ProfilesTop from '@/components/profile/ProfilesTop'
import StudentCard from '@/components/StudentCard'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {

  const activities = [
    {
        title: 'Math Olympiad ',
        date: 'May 30, 2025',
        description: 'Conducted for classes 8-9',
        icon: <MaterialCommunityIcons name="ruler" size={24} style={{backgroundColor:"#a4f5a6", borderRadius: 20, padding:10}} />
    },
      {
        title: 'Art Exhibition ',
        date: 'June 23, 2025',
        description: 'Exhibition of creative works',
      icon: <MaterialCommunityIcons name="television" size={24} style={{backgroundColor:"#a28ef9", borderRadius: 20, padding:10}} />
    },
      {
        title: 'Science and technology',
        date: 'May 30, 2025',
        description: 'Conducted for classes 9-10',
        icon: <MaterialCommunityIcons name="nature" size={24} style={{backgroundColor:"#ffd89d", borderRadius: 20, padding:10}}/>
    },
       {
        title: 'Law and Political Science',
        date: 'May 31, 2025',
        description: 'Conducted for classes 9-10',
        icon: <MaterialCommunityIcons name="school" size={24} style={{backgroundColor:"#a28ef9", borderRadius: 20, padding:10}} />
    },
      {
        title: 'Law and Political Science',
        date: 'May 31, 2025',
        description: 'Conducted for classes 9-10',
         icon: <MaterialCommunityIcons name="ruler" size={24} style={{backgroundColor:"#a4f5a6", borderRadius: 20, padding:10}} />
    },
      {
        title: 'Law and Political Science',
        date: 'May 31, 2025',
        description: 'Conducted for classes 9-10',
        icon: <MaterialCommunityIcons name="school" size={24} style={{backgroundColor:"#ffd89d", borderRadius: 20, padding:10}} />
    },
  ]

  const profileStyles = createProfilesStyles()

  return (

      <ScrollView  showsVerticalScrollIndicator={false} style={{backgroundColor:"#a28ef9",}}>
          <SafeAreaView style = {profileStyles.page}>
             <ProfilesTop/>
          </SafeAreaView>
          <View style= {profileStyles.profileLayout}>
        
                  <StudentCard/>
                  <View style= {profileStyles.filters}>
                      <ProfileButton section={'Achievements'}  />
                      <ProfileButton section={'Notes'}  />
                  </View>
                  <About/>
             
                  <View style={{marginVertical:20}}>
                        <Text style = {{  fontSize: 20,fontWeight: "600",letterSpacing: -1, marginBottom:10}}> Upcoming activities</Text>
                          {
                            activities.map((activity, index)=>(
                          <Activities
                            title={activity.title}
                            date={activity.date}
                            description={activity.description}
                            icon={activity.icon}
                            key={index}
                          />
                      ))
                    } 
                </View>
                
            </View>
</ScrollView>   
  )
}

export default profile