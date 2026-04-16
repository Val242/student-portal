import { ROUTES } from "@/constants/navigation";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RootNavigator() {
  const { authState } = useAuth();
  console.log("Auth state in navigator:", authState)

    const router = useRouter();

  useEffect(() => {
    if (authState?.authenticated) {
      router.replace(ROUTES.WIDGETS);
    } else if (authState?.authenticated === false) {
      router.replace(ROUTES.LOGIN);
    }
  }, [authState?.authenticated]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
        {authState?.authenticated ? (
    <Stack.Screen name="(tabs)" />
  ) : (
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