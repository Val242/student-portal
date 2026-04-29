import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import { getUserProfile } from '@/config/api'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'

export default function StudentCard() {
  

  const [name, setName] = useState('')
  const [className, setClassName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)


 

  const loadProfile = async () => {
    setLoading(true)

    try {
      const data = await getUserProfile.getMyProfile()
      

      setName(data.name)
      setClassName(data.classId)
      setProfilePicture(data.profilePicUrl)


    } catch (err: any) {
      console.error(err)
      setError('Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProfile()
  }, [])

  const profileStyles = createProfilesStyles()

  // 🔴 Loading UI
  if (loading) {
    return (
      <View style={{ paddingTop: 20 }}>
        <Text>Loading profile...</Text>
      </View>
    )
  }

  // 🔴 Error UI
  if (error) {
    return (
      <View style={{ paddingTop: 20 }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 10 }}>
      
      <Image
        source={
          profilePicture
            ? { uri: profilePicture }
            : require("../../assets/images/Rajeev.png")
        }
        style={{
          width: 120,
          height: 120,
          resizeMode: "cover",
          borderRadius: 25
        }}
      />

      <View style={{ display: 'flex', marginLeft: 10, justifyContent: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "700", letterSpacing: -1 }}>
          {name || "No Name"}
        </Text>

        <Text>{className || "No Class"}</Text>

      </View>



    </View>
  )
}