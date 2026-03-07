import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

export default function TabBarButton({onPress, onLongPress,isFocused, routeName, color }:
    {
        onPress:()=>void,
        onLongPress: ()=>void,
        isFocused:boolean,
        routeName: string,
        color: string,

    }
) {
      const icon = {
         widgets: (props: any)=> <MaterialCommunityIcons name='widgets-outline' size={25} {...props}/>, 
        schedule: (props: any)=>  <FontAwesome5 name='calendar' size={25} {...props}/>,
        tasks: (props: any)=>  <Ionicons name='document-outline' size={25}  {...props}/>,    
        profile: (props: any)=> <Octicons name='person' size={25} {...props}/>, 
    }
  return (
<Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
              {icon[routeName]({
                backgroundColor: isFocused? "white": "black",
                borderRadius: isFocused? 25: 0,
                color: isFocused? "black": "white",
                padding: isFocused? 10: 0
              })}
            {/* <Text style={{ color: isFocused ? colors.primary : colors.text }}>
               {label} 
            </Text> */}
          </Pressable>
  )
}
const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 50,
        flexDirection: "row",
        gap:5,
        width: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        marginHorizontal: 80,
        paddingVertical: 20,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabBarItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 5,
        

    }
})