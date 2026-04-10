import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useState } from "react";

interface AuthProps{
    authState?: {token: string | null; authenticated: boolean | null}
    onRegister?:(name: string, email: string , bio: string , classId:number  , password: string)=> Promise<any>
    onLogin?: (email: string, password: string)=> Promise<any>
}

const TOKEN_KEY = 'my-jwt';
export const BASE_API = 'http://10.72.121.72:3000/auth'
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

    const register = async (name: string, email: string , bio: string , classId:number  , password: string)=>{
        try {
            return await axios.post(`${BASE_API}/register`, {name,email,bio,classId,password})
        } catch (error) {
            return {error: true, msg: (error as any).response.data.message}
        }
    }
    const login = async (email: string , password: string)=>{
        try {
            const result = await axios.post(`${BASE_API}/login`, {email,password})

            setAuthState({
                token: result.data.token,
                authenticated:true
            })
            console.log(result)

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token)
        } catch (error) {
            return {error: true, msg: (error as any).response.data.message}
        }
    }
    
    const value ={
        onRegister: register,
        OnLogin: login
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}