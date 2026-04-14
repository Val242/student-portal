import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack } from "expo-router";

function RootNavigator() {
  const { authState } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {authState?.authenticated ? (
        // ✅ Protected routes
        <Stack.Screen name="(tabs)" />
      ) : (
        // ❌ Public routes
        <Stack.Screen name="(auth)" />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}