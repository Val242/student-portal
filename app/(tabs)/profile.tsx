import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import { ProfileButton } from '@/components/Button'
import About from '@/components/profile/About'
import Activities from '@/components/profile/Activities'
import ProfilesTop from '@/components/profile/ProfilesTop'
import StudentCard from '@/components/profile/StudentCard'
import { getUserProfile } from '@/config/api'
import { ROUTES } from '@/constants/navigation'
import { useAuth } from '@/context/AuthContext'
import { Activity } from '@/types'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
    const { onLogout,authState } = useAuth()
    const [activitiesRes, setActivitiesRes] = useState<Activity[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
      const [error, setError] = useState<string | null>(null)
      const [loading, setLoading] = useState(false)
    

      const iconMap ={
        maths: {name:"ruler",backgroundColor:"#a4f5a6"}
      }
    
     
    
    const loadActivities = async () => {
      setLoading(true);

      try {
        const data = await getUserProfile.getMyActivities();
        console.log(data);

        setActivitiesRes(data); //  store whole array
      } catch (err) {
        console.error(err);
        setError("Failed to load activities. Please check your internet connectivity");
      } finally {
        setLoading(false);
      }
    };
    
      useEffect(() => {
        loadActivities()
      }, [authState?.token])
    
     const onLogoutPress = async () => {
      try {
  console.log("Logout button pressed");

  const result = await onLogout?.();
  console.log("Logout result:", result);
    console.log(authState)
      } catch (error) {
        console.log("Logout error:", error);
        alert("Something went wrong during logout");
      }
    };

  if (loading) {
    return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  <Text>Loading profile...</Text>
</View>

    )
  }

  const profileStyles = createProfilesStyles()

  return (

      <ScrollView  showsVerticalScrollIndicator={false} >
          
          <SafeAreaView style = {profileStyles.page}>
             <ProfilesTop/>
          </SafeAreaView>

          <View style= {profileStyles.profileLayout}>

                  <StudentCard/>
                 
                  <View style= {profileStyles.filters}>
                      <ProfileButton section={'Achievements'}  onPress={() => router.replace(ROUTES.ACHIEVEMENTS)} />
                      <ProfileButton section={'Notes'}  onPress={() => router.replace(ROUTES.NOTES)}/>
                  </View>

                  <About/>
             
                  <View style={{marginVertical:20}}>
                        <Text style = {{  fontSize: 20,fontWeight: "600",letterSpacing: -1, marginBottom:10}}> Upcoming activities</Text>
                          {
                            activitiesRes.map((activity, index)=>(
                          <Activities
                            title={activity.title}
                            date={activity.date}
                            description={activity.description}
                            icon={activity.icon}
                            key={activity.id}
                          />
                      ))
                    } 
                </View>

                
            </View>
                  <Pressable onPress={onLogoutPress} >
            <Text style={{color: 'red', textAlign: 'center', fontWeight: "700"}}>Logout</Text>
      </Pressable>

</ScrollView>   
  )
}

export default profile