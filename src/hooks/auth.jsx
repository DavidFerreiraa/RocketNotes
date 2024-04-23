import { createContext, useContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }){
    return(
        <AuthContext.Provider value={{name: "David", email: "dfl8@aluno.ifal.edu.br"}}>
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
