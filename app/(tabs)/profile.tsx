import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import Activities from '@/components/Activities'
import { ProfileButton } from '@/components/Button'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import student from '../../assets/images/Rajeev.png'

const profile = () => {

  const activities = [
    {
        title: 'Math Olympiad',
        date: 'May 30, 2025',
        description: 'Conducted for classes 8-9',
    },
      {
        title: 'Art Exhibition',
        date: 'May 30, 2025',
        description: 'Exhibition of creative works',
    },
      {
        title: 'Science and teachnology',
        date: 'May 30, 2025',
        description: 'Conducted for classes 9-10',
    },
       {
        title: 'Law and Political Science',
        date: 'May 31, 2025',
        description: 'Conducted for classes 9-10',
    },
  ]

  const profileStyles = createProfilesStyles()

  return (
  
    <View >
      <ScrollView  showsVerticalScrollIndicator={false}>
      <SafeAreaView style = {profileStyles.page}>
        
      <View style = {profileStyles.page}>
         <View style = {profileStyles.topNav}>
           <Text style = {profileStyles.title}>My profile</Text>
            <View style = {profileStyles.InnerTopNav}>
                <MaterialCommunityIcons name="lead-pencil" size={30} color="black" />
                <Ionicons name='notifications-outline' size={30}/>
              </View>
          </View>
    </View>
  </SafeAreaView>
          <View style= {profileStyles.profileLayout}>

              <View style={{display:'flex', flexDirection: 'row' }}>
                  <Image
                  source={student}
                  style={{ width: 120, height: 120, resizeMode: "contain", borderRadius:25 }}
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

                <View style={{marginVertical:15}}>
                      <Text style = {{fontSize: 30,fontWeight: "400",letterSpacing: -1,}}>
                        About
                        </Text>
                      <Text style = {{fontSize: 20}}>
                        I am interested in math and biology. I like to solve
                        complex problems and participate in school olympiads
                      </Text>
                </View>

       <View style={{marginVertical:20}}>
          <Text style = {{  fontSize: 30,fontWeight: "400",letterSpacing: -1, marginBottom:10}}> Upcoming activities</Text>
          {
            activities.map((activity, index)=>(
                <Activities
                  title={activity.title}
                  date={activity.date}
                  description={activity.description}
                  key={index}
                />
            ))
          } 
       </View>
      
          </View>
</ScrollView>
     
    </View>
  )
}

export default profile