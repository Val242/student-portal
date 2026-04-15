import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps{
    authState?: {token: string | null; authenticated: boolean | null}
    onRegister?:(name: string, email: string , bio: string , classId:number  , password: string)=> Promise<any>
    onLogin?: (email: string, password: string)=> Promise<any>
}

const TOKEN_KEY = 'my-jwt';
export const BASE_API = 'http://10.69.102.72:3000/auth'
const AuthContext = createContext<AuthProps>({})

export const useAuth = ()=>{
    return useContext(AuthContext)
}


export const AuthProvider = ({children}: any)=>{
    const [authState, setAuthState] = useState<{
        token:string|null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated:null
    })

useEffect(() => {
  const loadToken = async () => {
    const accessToken = await SecureStore.getItemAsync(TOKEN_KEY);
    console.log("stored: ", accessToken);
    

    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      setAuthState({
        token: accessToken,
        authenticated: true,
      });
    } else {
      setAuthState({
        token: null,
        authenticated: false,
      });
    }
  };

  console.log(`authenticated is ${authState.authenticated}`)
  loadToken();
}, [authState.authenticated]);

    const register = async (name: string, email: string , bio: string , classId:number  , password: string)=>{
        try {
          
            return await axios.post(`${BASE_API}/register`, {name,email,bio,classId,password})
          
        } catch (error) {
            return {error: true, msg: (error as any).response.data.message}
        }
     }
        const login = async (email: string, password: string) => {
    console.log('hellp');

    try {
        const result = await axios.post(`${BASE_API}/login`, { email, password });
        console.log("logging .....");

        const accessToken = result.data.accessToken;

        setAuthState({
        token: accessToken,
        authenticated: true,
        });

        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        await SecureStore.setItemAsync(TOKEN_KEY, accessToken);
        if(accessToken){
      setAuthState({token:accessToken, authenticated: true })
        }
        console.log(accessToken)

        return result;

    } catch (error) {
        return {
        error: true,
        msg: (error as any)?.response?.data?.message || "Login failed",
        };
    }
    };
    
    const value ={
        onRegister: register,
        onLogin: login,
        authState
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}