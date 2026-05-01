import { getUserProfile } from '@/config/api'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export default function About() {
  const { authState } = useAuth()
         const [bio, setBio] = useState('')
         const [error, setError] = useState<string | null>(null)
         const [loading, setLoading] = useState(false)
         
           const loadProfile = async () => {
             setLoading(true)
         
             try {
               const data = await getUserProfile.getMyProfile()
               console.log(data)
               setBio(data.bio)
         
             } catch (err: any) {
               console.error(err)
               setError('Failed to load bio')
             } finally {
               setLoading(false)
             }
           }
             useEffect(() => {
               loadProfile()
             }, [authState?.token])
              if (loading) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text style={{ marginTop: 10, color: "#666" }}>
        Loading bio...
      </Text>
    </View>
  );
}
  return (
          <View style={{marginVertical:15}}>
                 <Text style = {{fontSize: 20,fontWeight: "600",letterSpacing: -1,}}>
                        About
                 </Text>
                 <Text style = {{fontSize: 15}}>
                  {bio || "Tap to add bio"}
                </Text>

                
           </View>
  )
}