import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function AuthLayout() {
 
  return (
   
      <>
      <Stack
          screenOptions={{
              headerShown: false,
              gestureEnabled: false,
          }}
      >
  
          <Stack.Screen name="login" />
          <Stack.Screen name="signup" />
          <Stack.Screen name="forgot-password" />
       
      </Stack>
      <StatusBar style="auto" />
      </>

  );
}