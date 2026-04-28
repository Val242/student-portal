import { API_BASE_URL, setToken } from "@/config/api";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps {
  authState?: {
    token: string | null;
    authenticated: boolean | null; // null = loading
  };
  onRegister?: (
    name: string,
    email: string,
    bio: string,
    classId: number,
    password: string
  ) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<void>;
}

const TOKEN_KEY = "my-jwt";

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null, // null = loading state
  });

  // =========================
  // LOAD TOKEN ON APP START
  // =========================
 useEffect(() => {
  let isMounted = true;

  const loadToken = async () => {
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);

      console.log("stored:", token);

      if (!isMounted) return;

      if (token) {
        // 🔥 1. update memory (IMPORTANT)
        setToken(token);

        // 🔥 2. update axios (optional fallback)
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;

        setAuthState({
          token,
          authenticated: true,
        });
      } else {
        setToken(null);

        setAuthState({
          token: null,
          authenticated: false,
        });
      }
    } catch (error) {
      console.log("Token load error:", error);

      if (!isMounted) return;

      setToken(null);

      setAuthState({
        token: null,
        authenticated: false,
      });
    }
  };

  loadToken();

  return () => {
    isMounted = false;
  };
}, []);

  // =========================
  // REGISTER
  // =========================
  const register = async (
    name: string,
    email: string,
    bio: string,
    classId: number,
    password: string
  ) => {
    try {
      return await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        bio,
        classId,
        password,
      });
    } catch (error) {
      return {
        error: true,
        msg: (error as any).response?.data?.message,
      };
    }
  };

  // =========================
  // LOGIN
  // =========================
  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(
        `${API_BASE_URL}/auth/login`,
        { email, password }
      );

      const accessToken = result.data.accessToken;

      await SecureStore.setItemAsync(TOKEN_KEY, accessToken);

        setToken(accessToken);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;

      setAuthState({
        token: accessToken,
        authenticated: true,
      });

      return result;
    } catch (error) {
      return {
        error: true,
        msg: (error as any)?.response?.data?.message || "Login failed",
      };
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
        setToken(null);

      delete axios.defaults.headers.common["Authorization"];

      setAuthState({
        token: null,
        authenticated: false,
      });

      console.log("Logout completed");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  // =========================
  // CONTEXT VALUE
  // =========================
  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};