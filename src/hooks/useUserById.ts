import { useState, useEffect } from "react";
import { User } from "../interfaces/auth.interface";
import { getUserById } from "../database";

export function useUserById(userId?: number | null) {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    if (!userId) {
      setUser(undefined);
      return;
    }

    const dadosUser = getUserById(userId);
    setUser(dadosUser);
  }, [userId]);

  return { user };
}
