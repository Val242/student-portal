import SearchBar from '@/components/SearchBar'
import { getUserProfile } from '@/config/api'
import { ROUTES } from '@/constants/navigation'
import { useAuth } from '@/context/AuthContext'
import { Note } from '@/types'
import { Ionicons } from "@expo/vector-icons"
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NotesCard from './NotesCard'

const Notes = () => {
   const { authState } = useAuth()
     const [notes, setNotes] = useState<Note[]>([]);
     const [loading, setLoading] = useState(false)
     const [searchQuery, setSearchQuery] = useState('');
     const [error, setError] = useState<string | null>(null)
         const loadNotes = async () => {
          setLoading(true);
    
          try {
            const data = await getUserProfile.getMyNotes();
            console.log(data);
    
            setNotes(data); //  store whole array
          } catch (err) {
            console.error(err);
            setError("Failed to load activities. Please check your internet connectivity");
          } finally {
            setLoading(false);
          }
          
        };
          const searchNotes = async (query: string) => {
            try {
          setLoading(true);
          const response = await getUserProfile.searchNotes(query);
          setNotes(response);
          setLoading(false);
            } catch (err) {
              console.error("Search error:", err);
            }
          };

          useEffect(() => {
      const delay = setTimeout(() => {
        if (searchQuery.trim().length > 0) {
          searchNotes(searchQuery);
        } else {
          loadNotes(); // fallback when input is empty
        }
      }, 500);

      return () => clearTimeout(delay);
    }, [searchQuery]);
        
          useEffect(() => {
            loadNotes()
          }, [authState?.token])



              if (loading) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text style={{ marginTop: 10, color: "#666" }}>
        Loading Notes...
      </Text>
    </View>
  );
} 

  return (
    <SafeAreaView style ={{paddingHorizontal: 10}}>
      <View style={{display:"flex", flexDirection: 'row', gap: 4, alignItems:"center"}}>
      <Pressable onPress={() => router.replace(ROUTES.PROFILE)}><Ionicons name="chevron-back" size={24} color="black" /></Pressable>
      <Text style={{ fontSize: 25,fontWeight: "700",letterSpacing: -1, color: "black"}}>Notes</Text>
      </View>

            <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search for Notes ..."
      />


    <View style={{ marginVertical: 20 }}>
      <Text style={{ 
        fontSize: 20, 
        fontWeight: "600", 
        letterSpacing: -1, 
        marginBottom: 10 
      }}>
        My Notes
      </Text>

        
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <NotesCard
            title={item.title}
            content={item.content}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#888', marginTop: 20 }}>
            No Notes yet
          </Text>
        }
      />
    </View>
                 <TouchableOpacity onPress={() => router.replace(ROUTES.PROFILE)}>
                 <Text style= {{color:'#a28ef9', fontWeight:'bold'}}>
                   Go to Profiles Tab
                   </Text>
                   </TouchableOpacity>
                   
                   
    </SafeAreaView>
  )
}

export default Notes

