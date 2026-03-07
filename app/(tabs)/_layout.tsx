import { MyTabBar } from "@/components/TabBar";
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from "react-native";


const TabsLayout = () => {
  return (
    <Tabs  
     screenOptions={{
    headerShown: false
  }}
tabBar={prop => <MyTabBar {...prop}  />}>
            <Tabs.Screen name="widgets" />
            <Tabs.Screen name="schedule" />
            <Tabs.Screen name="tasks" />
            <Tabs.Screen name="profile" />

    </Tabs>

    
  )
}

export default TabsLayout

const styles = StyleSheet.create({
    tabsScreen: {
        color: "white"
    }
})