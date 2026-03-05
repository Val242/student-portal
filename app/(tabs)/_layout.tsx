import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    // const {colors} = useTheme();
  return (
    <Tabs 
      screenOptions={{
        headerShown: false
      }}>

        <Tabs.Screen //Relates to an overall screen and how it is displayed
            name='schedule'//here is the name of the component or file who's content is going to be displayed in the screen
            options={{
                tabBarIcon: () => (
                    <FontAwesome5 name='calendar' size={30}/>      
                )
            }}
        
        />

 <Tabs.Screen //Relates to an overall screen and how it is displayed
            name='tasks'//here is the name of the component or file who's content is going to be displayed in the screen
            options={{
                tabBarIcon: () => (
                    <Ionicons name='document-outline' size={30}/>      
                )
            }}
        
        />

         <Tabs.Screen //Relates to an overall screen and how it is displayed
            name='profile'//here is the name of the component or file who's content is going to be displayed in the screen
            options={{
                tabBarIcon: () => (
                    <Octicons name='person' size={30}/>      
                )
            }}
        
        />
         {/* <Tabs.Screen //Relates to an overall screen and how it is displayed
            name='profile'//here is the name of the component or file who's content is going to be displayed in the screen
            options={{
                tabBarIcon: () => (
                    <Ionicons name='calendar'/>      
                )
            }}
        
        /> */}

     


    </Tabs>

    
  )
}

export default TabsLayout