import { createProfilesStyles } from '@/assets/styles/profiles.styles'
import { getUserProfile } from '@/config/api'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Modal, Pressable, Text, TextInput, View } from 'react-native'

const ProfilesTop = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const[bio, setBio] = useState("")

    const loadProfile = async () => {
    
  
      try {
        const data = await getUserProfile.getMyProfile()
        
  
        setName(data.name)
        setEmail(data.email)
        setBio(data.bio)
  
  
      } catch (err: any) {
        console.error(err)
        
      }
    }
        const updateProfile = async () => {
    
  
      try {
        const data = await getUserProfile.updateUserProfile({name: name, bio:bio, email:email})


        console.log(data)

        loadProfile()
  
      } catch (err: any) {
        console.error(err)
        
      }
    }
  
  
    useEffect(() => {
      loadProfile()
    }, [])
  
  
  const profileStyles = createProfilesStyles()
  return (
    
      <View style = {profileStyles.page}>
         <View style = {profileStyles.topNav}>
           <Text style = {profileStyles.title}>My profile</Text>
            <View style = {profileStyles.InnerTopNav}>
               <Pressable onPress={() => setModalVisible(true)}> <MaterialCommunityIcons name="lead-pencil" size={25} color="black" style={{backgroundColor:"white", borderRadius: 20, padding:8}}/></Pressable>
               <Ionicons name='notifications-outline' size={25} style={{backgroundColor:"white", borderRadius: 20, padding:8}}/>
              </View>
          </View>
         
  <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}>
        
        <View style={{
          width: "85%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
        }}>
          
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Edit Profile
          </Text>

          {/* Name */}
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />

          {/* Email */}
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}
          />

          <TextInput
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}
          />

          {/* Buttons */}
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={{ color: "red" }}>Cancel</Text>
            </Pressable>

          <Pressable
            onPress={async () => {
              console.log(name, email, bio);

              await updateProfile(); //  actually runs the function

              setModalVisible(false);
            }}
          >
            <Text style={{ color: "green", fontWeight: "bold" }}>
              Save
            </Text>
          </Pressable>

          </View>

        </View>
      </View>
    </Modal>
    </View>
  )
}

export default ProfilesTop