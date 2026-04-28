import { useAuth } from "@/context/AuthContext";
import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
  const { authState } = useAuth();

  if (authState?.authenticated) {
    return <Redirect href="/(tabs)/schedule" />;
  }

  return <Slot />;
}