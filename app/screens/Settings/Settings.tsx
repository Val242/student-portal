import { ROUTES } from '@/constants/navigation'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Settings = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [bio, setBio] = useState('');
        const [profilePicture, setProfilePicture] = useState('')

        const size = 150
  return (
    <SafeAreaView style ={{paddingHorizontal: 10}}>
          <View style={{display:"flex", flexDirection: 'row', gap: 4, alignItems:"center"}}>
      <Pressable onPress={() => router.replace(ROUTES.PROFILE)}><Ionicons name="chevron-back" size={24} color="black" /></Pressable>
      <Text style={{ fontSize: 25,fontWeight: "700",letterSpacing: -1, color: "black"}}>Profile Settings</Text>
      </View>
      <View style={{paddingTop: 20, display:"flex", gap:20, justifyContent:"center"}}>
            <View style={{display:"flex", alignItems:"center", gap:4}}>
                {/**Image */}
                      <Image
                        source={
                          profilePicture
                            ? { uri: profilePicture }
                            : require("../../../assets/images/Rajeev.png")
                        }
                        style={{
                          width: size,
                          height: size,
                          resizeMode: "cover",
                          borderRadius: size/2
                        }}
                        
                      />
                      <Text>Edit</Text>
            </View>
            <View style={{display:"flex", gap:10}}>
                    <View style={{display:"flex", flexDirection:"row", gap:15, alignItems:"center"}}>
                         <Ionicons name="person-outline" size={25} />
                                  <View>
                                     <Text >Name  </Text>
                                       <Text>{name|| "Ebong Valentine"}</Text>
                                </View>
                    </View>
                    <View style={{display:"flex", flexDirection:"row", gap:15, alignItems:"center"}}>
                        <Ionicons name="mail-outline" size={25}  />
                                  <View>
                                     <Text >Email  </Text>
                                       <Text>{email||'ebongvalentine70@gmail.com'}</Text>
                                </View>
                    </View>
                    <View style={{display:"flex", flexDirection:"row", gap:15, alignItems:"center"}}>
                       <Ionicons name="information-circle-outline" size={25}  />
                                  <View>
                                     <Text >Bio  </Text>
                                       <Text>{bio||'Community Builder'}</Text>
                                </View>
                    </View>
            </View>
    </View>
    </SafeAreaView>
  )
}

export default Settings