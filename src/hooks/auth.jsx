import { createContext, useContext, useState } from "react";

import { api } from "../services/api"
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [ data, setData ] = useState({});

    async function signIn({ email, password }){
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, jwtToken } = response.data;

            api.defaults.headers.authorization = `Bearer ${jwtToken}`;
            setData({ user, jwtToken });
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.message);
            } else {
                toast.error(error.response.data.message);
            }
        }
    }

    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
