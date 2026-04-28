import { MyTabBar } from "@/components/TabBar";
import { useAuth } from "@/context/AuthContext";
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from "react-native";


const TabsLayout = () => {
    const { authState } = useAuth();


  if (authState?.authenticated === null) {
    return null; // or splash/loading screen
  }

  if (!authState?.authenticated) {
    return <Redirect href="/(auth)/login" />;
  }
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