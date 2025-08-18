import { useContext } from "react";
import { AuthContextData } from "../interfaces/auth.interface";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
