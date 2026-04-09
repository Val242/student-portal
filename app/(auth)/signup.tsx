import { createAuthStyles } from '@/assets/styles/auth.styles'
import { ROUTES } from '@/constants/navigation'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signup = () => {
      const [user, setUser] = React.useState({
        name: 'Ebong Valentine',
        email: 'ebongvalentine70@gmail.com',
        classId: '1A',
        password: '12345678',
        confirmPassword: '12345678',
      });

      const handleChange = (field: string, value: string) => {
      setUser((prev) => ({
        ...prev,
        [field]: value,
      }));
};
      const authStyles = createAuthStyles()
      
      const OnPressFunction = ()=>{
        alert("Hello")
      }

  return (
    
    <SafeAreaView  style={authStyles.container}>

        <Text style={authStyles.title}>Welcome to StudentPortal!</Text>
        <Text style={authStyles.title}>Create your student account</Text>
    

          <TextInput
          value={user.name}
          onChangeText={(text) => handleChange('name', text)}
          style={authStyles.input}
        />

      <TextInput
        value={user.email}
        onChangeText={(text) => handleChange('email', text)}
        style={authStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        value={user.classId}
        onChangeText={(text) => handleChange('classId', text)}
        style={authStyles.input}
      />

      <TextInput
        value={user.password}
        onChangeText={(text) => handleChange('password', text)}
        style={authStyles.input}
        secureTextEntry
      />

      <TextInput
        value={user.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
        style={authStyles.input}
        secureTextEntry
      />

      <Pressable onPress={OnPressFunction} style={authStyles.cta}>
            <Text style={{color: 'white', textAlign: 'center', fontWeight: "700"}}>Sign Up </Text>
      </Pressable>

      <Text> or </Text>

      <View style={{display:'flex', flexDirection: 'row', justifyContent:"space-around", marginVertical: 15 }}>
            <View style={{display:'flex', flexDirection: 'row', }}>
              <Ionicons name= "logo-apple" size={30} color='gray'/>
              <Text style={{fontSize:20, color:'gray'}}> Apple </Text>
            </View>

            <View style={{display:'flex', flexDirection: 'row', }}>
              <Ionicons name= "logo-google" size={30} />
              <Text style={{fontSize:20, color:'gray'}}> Google </Text>
            </View>
      </View>

      <View style={{marginVertical:15}}>
        <Text style={{textAlign: 'center'}}>
          Already have an account?
           <TouchableOpacity onPress={() => router.replace(ROUTES.LOGIN)}>
           <Text style= {{color:'#a28ef9', fontWeight:'bold'}}>
             Log in </Text>
             </TouchableOpacity>
             </Text>
      </View>

      

    </SafeAreaView>
  )
}

export default signup