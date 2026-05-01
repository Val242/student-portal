import SearchBar from '@/components/SearchBar'
import { getUserProfile } from '@/config/api'
import { ROUTES } from '@/constants/navigation'
import { Achievement } from '@/types'
import { Ionicons } from "@expo/vector-icons"
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AchievementCard2 from './AchievementCard2'

const Achievements = () => {
     const [achievements, setAchievements] = useState<Achievement[]>([]);
     const [loading, setLoading] = useState(false)
     const [searchQuery, setSearchQuery] = useState('');
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
          <Text>Loading Achievements...</Text>
        </View>
        
            )
          }  

  return (
    <SafeAreaView style ={{paddingHorizontal: 10}}>
      <View style={{display:"flex", flexDirection: 'row', gap: 4, alignItems:"center"}}>
      <Pressable onPress={() => router.replace(ROUTES.PROFILE)}><Ionicons name="chevron-back" size={24} color="black" /></Pressable>
      <Text style={{ fontSize: 25,fontWeight: "700",letterSpacing: -1, color: "black"}}>Achievements</Text>
      </View>

            <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search for achievements..."
      />
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
                   Go to Profiles Tab
                   </Text>
                   </TouchableOpacity>
                   
                   
    </SafeAreaView>
  )
}

export default Achievements

