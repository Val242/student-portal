import { getUserProfile } from '@/config/api'
import { ROUTES } from '@/constants/navigation'
import { Achievement } from '@/types'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AchievementCard2 from './AchievementCard2'

const Achievements = () => {
     const [achievements, setAchievements] = useState<Achievement[]>([]);
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState<string | null>(null)
         const loadAchievements = async () => {
          setLoading(true);
    
          try {
            const data = await getUserProfile.getMyAchievments();
            console.log(data);
    
            setAchievements(data); //  store whole array
          } catch (err) {
            console.error(err);
            setError("Failed to load activities. Please check your internet connectivity");
          } finally {
            setLoading(false);
          }
          
        };
        
          useEffect(() => {
            loadAchievements()
          }, [])

          if (loading) {
            return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Loading profile...</Text>
        </View>
        
            )
          }  

  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
      <Text>Achievements</Text>
                        <View style={{marginVertical:20}}>
                              <Text style = {{  fontSize: 20,fontWeight: "600",letterSpacing: -1, marginBottom:10}}> My Achievements</Text>
                                {
                                  achievements.map((achievement)=>(
                                <AchievementCard2
                                  title={achievement.title}
                                  date={achievement.date}
                                  description={achievement.description}
                                  key={achievement.id}
                                />
                            ))
                          } 
                      </View>
                 <TouchableOpacity onPress={() => router.replace(ROUTES.PROFILE)}>
                 <Text style= {{color:'#a28ef9', fontWeight:'bold'}}>
                   Go to Profiles Tab</Text>
                   </TouchableOpacity>
                   
                   
    </View>
  )
}

export default Achievements

