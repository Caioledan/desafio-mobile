import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextData, User } from "../interfaces/auth.interface";
import { getUserByCredentials } from "../database";

const USER_STORAGE_KEY = "@AppName:user";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromStorage() {
      try {
        const storedUser = await AsyncStorage.getItem(USER_STORAGE_KEY);

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Falha no carregamento do usuário", error);
      } finally {
        setLoading(false);
      }
    }

    loadUserFromStorage();
  }, []);

  async function login(matricula: string, senha: string): Promise<boolean> {
    const foundUser = getUserByCredentials(matricula, senha);

    if (foundUser) {
      setUser(foundUser);

      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(foundUser));
      return true;
    }

    return false;
  }

  async function logout(): Promise<void> {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
