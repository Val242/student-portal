import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const SearchBar = ({value, onChangeText,placeholder}: SearchBarProps) => {
  return (
    <View style={styles.container}>
 
        


{/* // In SearchBar.tsx */}
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#a29797"
        value={value}                    // ← Add this
        onChangeText={onChangeText}      // ← Add this
        returnKeyType="search"
        />

                 <Ionicons 
        name="search" 
        size={22} 
        color="#212529" 
        style={styles.searchIcon}
      />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',            // White background
    borderRadius: 20,                  // Good rounded corners
    // paddingHorizontal: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff',            // Light border for definition
    marginHorizontal: 10,              // Optional: spacing from screen edges
    marginTop: 10,
    justifyContent: "space-around"
  },
  searchIcon: {
    marginRight: 6,
  },
  input: {

    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;