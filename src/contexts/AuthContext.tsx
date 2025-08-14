import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { AuthContextData, User } from "../interfaces/auth.interface";
import { getUserByCredentials } from "../database";


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  function login(matricula: string, senha: string): boolean {
    const foundUser = getUserByCredentials(matricula, senha);

    if (foundUser){
        setUser(foundUser);
        return true;
    }

    return false;
  }

  return (
    <AuthContext.Provider value={{ user, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

